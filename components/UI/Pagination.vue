<template>
  <div>
    <ul class="pagination">
      <li class="page-item">
        <button
          type="button"
          class="page-link"
          v-if="page != 1"
          @click="prev"
        >
          Previous
        </button>
      </li>
      <li class="page-item">
        <button
          type="button"
          class="page-link"
          :key="pageNumber"
          v-for="pageNumber in pages.slice(page - 1, page + 5)"
          @click="pagesBetween(pageNumber)"
        >
          {{ pageNumber }}
        </button>
      </li>
      <li class="page-item">
        <button
          type="button"
          @click="next"
          v-if="page < pages.length"
          class="page-link"
        >
          Next
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        pages: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            page: 1,
            // pages: []
        }
    },
    methods: {
        prev() {
            this.page--;
            this.$emit('clickedPage', this.page)
        },
        next() {
            this.page++;
            this.$emit('clickedPage', this.page)
        },
        pagesBetween(pageNumber) {
            this.page = pageNumber;
            this.$emit('clickedPage', pageNumber)
        }
    },
}
</script>
