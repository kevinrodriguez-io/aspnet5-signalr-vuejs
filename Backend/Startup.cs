using Microsoft.Owin;
using Owin;
using Backend;
using Microsoft.AspNet.SignalR;

namespace Backend {
    public class Startup {
        public void Configuration(IAppBuilder app) {
            app.MapSignalR(new HubConfiguration {
                EnableJSONP = true,
                EnableDetailedErrors = true,
                EnableJavaScriptProxies = true
            });
        }
    }
}