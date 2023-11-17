import { onMounted, shallowRef, type ShallowRef } from 'vue'

interface useLottieComposableState {
  /**
   * Prepare lottie data
   */
  animationData: ShallowRef<object | null>;
}

/**
 * Preloads lottie animation
 *
 * @param name - animation name
 */
export default function useLottie(name: 'simp' | 'eyes'): useLottieComposableState {
  /**
   * Lottie animation data
   */
  const animationData = shallowRef<object | null>(null)

  /**
   * Dynamically import animation and assign it to animationData
   */
  const setAnimationData = async (): Promise<any> => {
    const { default: animation } = await import(`../../presentation/assets/lottie/${name}.json`)
    animationData.value = animation
  }

  onMounted(() => {

    setAnimationData()

  })

  return {
    animationData,
  }
}