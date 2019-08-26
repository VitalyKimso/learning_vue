<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale: {{$route.query.locale}}</p>
    <p>q: {{$route.query.q}}</p>
    <div style="height: 700px">
      <p>dTest</p>
      <button class="btn btn-primary" @click="confirmed = !confirmed">Confirm: {{confirmed}}</button>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                confirmed: false
            }
        },
        beforeRouteLeave(to, from, next) {
            if (this.confirmed) {
                next();
            } else {
                if (confirm('Are you sure?')) {
                    next();
                } else {
                    next(false);
                }
            }
        }
    }
</script>
