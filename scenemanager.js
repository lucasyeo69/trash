function SceneManager(p)
{
    this.scenes = [];
    this.scene = null;

    // Wire relevant p5.js events, except setup()
    // If you don't call this method, you need to manually wire events
    this.wire = function()
    {
        const P5Events = [ "mouseClicked",
                "mousePressed",
                "mouseReleased",
                "mouseMoved",
                "mouseDragged",
                "doubleClicked",
                "mouseWheel",
                "keyPressed",
                "keyReleased",
                "keyTyped",
                "touchStarted",
                "touchMoved",
                "touchEnded",
                "deviceMoved",
                "deviceTurned",
                "deviceShaken" ];

        var me = this;
        var o = p != null ? p : window;

        // Wire draw manually for speed reasons...
        o.draw = function(){ me.draw(); };

        // This loop will wire automatically all P5 events to each scene like this:
        // o.mouseClicked = function() { me.handleEvent("mouseClicked"); }
        for(var i = 0; i < P5Events.length; i++)
        {
            let sEvent = P5Events[i]; // let is necesary to set the scope at the level of for
            o[sEvent] = function() { me.handleEvent(sEvent) };
        }

        return me
