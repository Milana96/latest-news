<template>
  <div class="footer-container">
    <ul class="footer-container-nav-list pages">
      <li class="footer-container-nav-list-item ">
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
      <li class="footer-container-nav-list-item">
        <nuxt-link to="/about">About</nuxt-link>
      </li>
    </ul>
    <ul class="footer-container-nav-list contact">
      <li class="footer-container-nav-list-item">
        <span>
          <fa :icon="['fas', 'phone-alt']" />
        </span>
        <a href="tel:00381642590189" target="_blank">+381642590189</a>
      </li>
      <li class="footer-container-nav-list-item">
        <span>
          <fa :icon="['fas', 'envelope']" />
        </span>
        <a href="mailto:milana.maksimovic1996@gmail.com" target="_blank"
          >milana.maksimovic1996@gmail.com</a
        >
      </li>
      <li class="footer-container-nav-list-item">
        <span>
          <fa :icon="['fas', 'map-marker-alt']" />
        </span>
        <a
          href="https://www.google.com/maps/place/Novi+Sad/@45.2715065,19.8144217,13z/data=!3m1!4b1!4m5!3m4!1s0x475b10613de93455:0xb6f7d683724fe28!8m2!3d45.2671352!4d19.8335496"
          target="_blank"
          >Novi Sad - Serbia</a
        >
      </li>
    </ul>
    <p class="copyright">Copyright Milana Maksimović 2020</p>
  </div>
</template>
