import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

export function useCurrentRouteLoc() {
  const router = useRouter();
  const route = useRoute();

  const currentRouteLoc = computed(() => {
    return router.resolve(route);
  });

  return currentRouteLoc;
}
