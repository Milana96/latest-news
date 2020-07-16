export default function (context) {
    console.log('Auth middleware', context.store.getters.isAuthenticated);
    if (!context.store.getters.isAuthenticated) {
        context.redirect("/admin/auth")
    }
    
}
