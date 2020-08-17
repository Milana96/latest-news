<template>
  <div class="input-control">
    <label><slot /></label>
    <input
      v-if="controlType === 'input'"
      :value="value"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    />
    <input
      v-if="controlType === 'file'"
      type="file"
      :value="value"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    />
    <textarea
      v-if="controlType === 'textarea'"
      rows="10"
      :value="value"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "AppInputControl",
  props: {
    controlType: {
      type: String,
      default: "input"
    },
    value: {
      type: String,
      default: ""
    }
  }
};
</script>
