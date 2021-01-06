<template>
  <button class="g-ui" type="button">
    <span v-if="$slots.before" class="before-slot">
      <slot name="before" />
    </span>
    <span v-if="$slots.after" class="after-slot">
      <slot name="after" />
    </span>
    <span
      v-if="$slots.default"
      class="default-slot">
      <slot name="default" />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'GButton',
  props: {},
  setup() {
    const foo = ref('foo');

    return {
      foo,
    };
  },
});
</script>

<style lang="scss" scoped>
button.g-ui {
  @apply flex items-center;
  @apply rounded border border-transparent outline-none;
  @apply duration-150;

  @apply h-9 font-normal;

  &[sm] {
    @apply h-8 text-xs font-normal;
  }
  &[lg] {
    @apply h-12 text-base font-semibold;
  }

  .default-slot {
    @apply mx-3 order-2;
  }

  .default-slot, .before-slot, .after-slot {
    @apply flex items-center;
  }

  .before-slot {
    @apply ml-3 order-1;

    ~ .default-slot {
      @apply ml-2;
    }
  }

  .after-slot {
    @apply mr-3 order-3;

    ~ .default-slot {
      @apply mr-2;
    }
  }
}

button.g-ui {
  &[primary] {
    @apply bg-purple text-white;

    &:hover {
      @apply bg-purple-80;
    }
  }

  &[secondary] {
    @apply bg-white text-purple border-purple;

    &:hover {
      @apply bg-purple-10;
    }
  }
}

button.g-ui[info] {
  &[primary] {
    @apply bg-info text-white;

    &:hover {
      @apply bg-info-80;
    }
  }

  &[secondary] {
    @apply bg-white text-info border-info;

    &:hover {
      @apply bg-info-5;
    }
  }
}

button.g-ui[success] {
  &[primary] {
    @apply bg-success text-white;

    &:hover {
      @apply bg-success-80;
    }
  }

  &[secondary] {
    @apply bg-white text-success border-success;

    &:hover {
      @apply bg-success-5;
    }
  }
}

button.g-ui[alert] {
  &[primary] {
    @apply bg-alert text-white;

    &:hover {
      @apply bg-alert-80;
    }
  }

  &[secondary] {
    @apply bg-white text-alert border-alert;

    &:hover {
      @apply bg-alert-5;
    }
  }
}

button.g-ui[warning] {
  &[primary] {
    @apply bg-warning text-white;

    &:hover {
      @apply bg-warning-80;
    }
  }

  &[secondary] {
    @apply bg-white text-warning border-warning;

    &:hover {
      @apply bg-warning-5;
    }
  }
}

button.g-ui[contrast] {
  &[primary] {
    @apply bg-transparent text-purple border-transparent;

    &:hover {
      @apply bg-purple bg-opacity-5;
    }

    &:disabled {
      @apply text-gray-60;

      &:hover {
        @apply text-gray-60 bg-transparent;
      }
    }
  }

  &[secondary] {
    @apply bg-transparent text-white;

    &:hover {
      @apply bg-white bg-opacity-10 bg-opacity-5;
    }

    &:disabled {
      @apply text-gray-60 bg-transparent;

      &:hover {
        @apply text-gray-60 bg-transparent;
      }
    }
  }
}

button.g-ui,
button.g-ui[info],
button.g-ui[success],
button.g-ui[alert],
button.g-ui[warning],
{
  &:disabled {
    @apply bg-gray-5 text-gray-60 border-gray-5 cursor-default select-none;

    &:hover {
      @apply bg-gray-5 text-gray-60;
    }
  }
}
</style>
