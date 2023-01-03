Imports System.Web.Optimization
Imports Newtonsoft.Json

Public Class Global_asax
    Inherits HttpApplication

    Sub Application_Start(sender As Object, e As EventArgs)
        ' Fires when the application is started
        RouteConfig.RegisterRoutes(RouteTable.Routes)
        BundleConfig.RegisterBundles(BundleTable.Bundles)

        '   JsonConvert.DefaultSettings = () >= New JsonSerializerSettings {
        'Formatting = Newtonsoft.Json.Formatting.Indented,
        'ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
        '};
    End Sub
End Class