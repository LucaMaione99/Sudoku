<template>
    <Transition name="fade">
        <div
            :class="{ invisible: !storeModal.activeModal }"
            class="bg-black/20 w-screen h-screen fixed top-0 z-[9999]">
            <div class="flex justify-center items-center h-screen">
                <div
                    class="relative bg-white rounded-lg min-h-[300px] min-w-[350px] md:min-w-[550px] md:max-w-[800px] shadow">
                    <img
                        v-if="storeModal.backgroundImg"
                        :src="storeModal.backgroundImg"
                        class="z-0 absolute inset-0 w-full h-full object-cover modal-img-background"
                        alt="" />
                    <div
                        class="absolute w-full h-full z-0"
                        v-html="storeModal.backgroundHtml"></div>
                    <div class="z-[99999] relative">
                        <button
                            @click="storeModal.closeModal('close')"
                            type="button"
                            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-hide="popup-modal">
                            <svg
                                aria-hidden="true"
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Chiudi</span>
                        </button>
                        <div
                            class="p-6 flex flex-col justify-between text-center min-h-[300px] gap-y-4">
                            <div>
                                <div v-if="storeModal.icon">
                                    <svg
                                        v-if="storeModal.icon == 'info'"
                                        aria-hidden="true"
                                        class="mx-auto mt-8 text-platform-primary w-16 h-16"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20">
                                        <path
                                            id="info-circle-Filled_1_"
                                            d="M359,2555a10,10,0,1,0,10,10A10.016,10.016,0,0,0,359,2555Zm1,14a1,1,0,0,1-2,0v-4a1,1,0,0,1,2,0Zm-1-7a1,1,0,1,1,1-1A1,1,0,0,1,359,2562Z"
                                            transform="translate(-349 -2555)"
                                            fill="#D83E43" />
                                    </svg>

                                    <svg
                                        v-else-if="storeModal.icon == 'success'"
                                        aria-hidden="true"
                                        class="mx-auto mt-8 text-platform-primary w-16 h-16"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20">
                                        <path
                                            id="check-circle-Filled_1_"
                                            d="M407,2555a10,10,0,1,0,10,10A10.016,10.016,0,0,0,407,2555Zm4.71,8.71-5,5a1.014,1.014,0,0,1-1.42,0l-3-3a1,1,0,0,1,1.42-1.42l2.29,2.3,4.29-4.3a1,1,0,1,1,1.42,1.42Z"
                                            transform="translate(-397 -2555)"
                                            fill="#2FA33D" />
                                    </svg>
                                    <svg
                                        v-else-if="storeModal.icon == 'error'"
                                        aria-hidden="true"
                                        class="mx-auto mt-8 text-platform-primary w-16 h-16"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="21.881"
                                        height="20"
                                        viewBox="0 0 21.881 20">
                                        <path
                                            fill="#e3342f"
                                            id="times-hexagon"
                                            d="M21.216,8.709,18.033,3.255A4.56,4.56,0,0,0,14.107,1H7.679A4.564,4.564,0,0,0,3.752,3.255L.569,8.709a4.555,4.555,0,0,0,0,4.581l3.183,5.455A4.56,4.56,0,0,0,7.678,21h6.428a4.564,4.564,0,0,0,3.927-2.255l3.182-5.455a4.555,4.555,0,0,0,0-4.581Zm-6.94,4.375A.909.909,0,1,1,12.99,14.37l-2.085-2.085L8.821,14.37a.909.909,0,1,1-1.286-1.286L9.62,11,7.535,8.915A.909.909,0,0,1,8.821,7.629l2.085,2.085L12.99,7.629a.909.909,0,0,1,1.286,1.286L12.191,11Z"
                                            transform="translate(0.049 -1)" />
                                    </svg>
                                    <svg
                                        v-else-if="storeModal.icon == 'warning'"
                                        aria-hidden="true"
                                        class="mx-auto mt-8 text-platform-primary w-16 h-16"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22.851"
                                        height="20"
                                        viewBox="0 0 22.851 20">
                                        <path
                                            fill="#F8C46E"
                                            id="triangle-warning"
                                            d="M21.992,14.654,14.293,2.5a3.488,3.488,0,0,0-5.746.029L.886,14.635A4.211,4.211,0,0,0,.41,18.98,4.081,4.081,0,0,0,4.231,21H18.638a4.071,4.071,0,0,0,3.821-2.02,4.236,4.236,0,0,0-.467-4.326ZM10.481,6.717a.953.953,0,0,1,1.906,0v5.717a.953.953,0,0,1-1.906,0Zm.953,11.434a1.429,1.429,0,1,1,1.429-1.429A1.427,1.427,0,0,1,11.434,18.151Z"
                                            transform="translate(-0.005 -1)" />
                                    </svg>
                                </div>

                                <h3
                                    v-if="storeModal.title"
                                    class="text-2xl font-semibold mt-4 whitespace-pre-line pb-4">
                                    {{ storeModal.title }}
                                </h3>
                            </div>
                            <h3
                                v-if="storeModal.msg"
                                id="modals"
                                class="mb-5 text-lg font-normal md:min-w-[300px] md:max-w-[800px] text-gray-500 dark:text-gray-400 whitespace-pre-line">
                                {{ storeModal.msg }}
                            </h3>
                            <div v-if="storeModal.contentHtml" v-html="storeModal.contentHtml"></div>
                            <div
                                v-if="storeModal.activeModal"
                                :class="{
                                    invisible: !storeModal.buttonVisible,
                                }"
                                class="flex justify-center">
                                <PrimaryButton
                                    @click="storeModal.closeModal('ok')"
                                    class="w-32"
                                    >{{storeModal.buttonConfirmText}}</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import PrimaryButton from "../buttons/PrimaryButton.vue";
import { useModalStore } from "@/stores/handleModal.js";
const storeModal = useModalStore();
</script>
