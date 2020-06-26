<template>
    <div class="admin-auth-container">
        <form>
            <AppControlInput type="email">Email address</AppControlInput>
            <AppControlInput type="password">Password</AppControlInput>
            <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up'}}</AppButton>
            <AppButton
                type="button"
                btn-style="inverted"
                style="margin-left: 10px"
                @click="isLogin = !isLogin"
            >Switch to {{ isLogin ? 'Sign Up' : 'Login'}}</AppButton>
        </form>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    data() {
        return {
            isLogin: true
        }
    },
}
</script>