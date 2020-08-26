<template>
  <div class="container container-contact">
    <div class="container-contact-inner">
      <div class="container-contact-inner-intro"></div>
      <div class="container-contact-inner-form-wrapper">
        <div class="intro-background">
          <img src="~/assets/images/contact-intro-background.jpg" alt="" />
        </div>
        <div class="about-intro-text">
          <div class="card-3d-wrap">
            <div class="card-3d-wrapper">
              <div class="front">
                <form
                  class="container-inner-form front"
                  @submit.prevent="onSubmit"
                >
                  <h3 class="sign-log">CONTACT US AND MAKE AN APPOINTMENT</h3>
                  <p class="contact-form-intro">
                    Please note that it is very important to pose the questions
                    in an adequate way and provide us with valid data, in order
                    for us to reply to your request fast and with relevant
                    information. Thank you in advance.
                  </p>
                  <p class="success-contact" v-if="success">Your message was successfully sent!</p>
                  <AppControlInput v-if="!success" type="input" v-model="contactData.name" placeholder="Name"
                    ></AppControlInput
                  >
                  <AppControlInput v-if="!success" type="email" v-model="contactData.email" placeholder="Email address"
                    ></AppControlInput
                  >
                  <AppControlInput v-if="!success" type="textarea" v-model="contactData.message" placeholder="Message"
                    ></AppControlInput
                  >

                  <AppButton v-if="!success" type="submit">
                    Send
                  </AppButton>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-contact-inner-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44925.23304813394!2d19.814421721166465!3d45.271506453153336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b10613de93455%3A0xb6f7d683724fe28!2sNovi%20Sad!5e0!3m2!1sen!2srs!4v1598430736214!5m2!1sen!2srs"
          width="100%"
          height="650"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactData: {
        name: "",
        email: "",
        message: ""
      },
      success: false
    };
  },
  methods: {
    onSubmit() {
        this.$store.dispatch("sendContactData", this.contactData).then(() => {
            this.success = true;
        });
    }
  }
};
</script>
