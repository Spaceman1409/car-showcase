"use client";

import React, { Fragment } from "react";
import { CarProps } from "@/types";
import {
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import { generateCarImageUrl } from "@/utils";

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

function CarDetails({ isOpen, closeModal, car }: CarDetailsProps) {
    return (
        <>
            <Transition show={isOpen} as={Fragment} appear>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <TransitionChild
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <DialogPanel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                                        <button
                                            className="absolute z-10 top-2 right-2 w-fit p-2 bg-primary-blue-100 rounded-full"
                                            type="button"
                                            onClick={closeModal}
                                        >
                                            <Image
                                                className="object-contain"
                                                src="/close.svg"
                                                alt="close"
                                                height={20}
                                                width={20}
                                            />
                                        </button>
                                        <div className="flex-1 flex flex-col gap-3">
                                            <div className="relative w-full h-40 rounded-lg">
                                                <Image
                                                    className="object-contain"
                                                    src={generateCarImageUrl(
                                                        car,
                                                        "12"
                                                    )}
                                                    alt="car-model"
                                                    fill
                                                    priority
                                                />
                                            </div>
                                            <div className="relative w-full h-40 rounded-lg">
                                                <Image
                                                    className="object-contain"
                                                    src={generateCarImageUrl(
                                                        car,
                                                        "29"
                                                    )}
                                                    alt="car-model"
                                                    fill
                                                    priority
                                                />
                                            </div>
                                            <div className="flex gap-3">
                                                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                                    <Image
                                                        className="object-contain"
                                                        src={generateCarImageUrl(
                                                            car,
                                                            "33"
                                                        )}
                                                        alt="car-model"
                                                        fill
                                                        priority
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 flex-col gap-2">
                                            <h2 className="font-semibold text-xl capitalize">
                                                {car?.make} {car?.model}
                                            </h2>
                                            <div className="flex flex-wrap mt-3 gap-4">
                                                {Object.entries(car).map(
                                                    ([key, value]) => (
                                                        <div
                                                            key={key}
                                                            className="flex justify-between gap-5 w-full text-right"
                                                        >
                                                            <h4 className="text-gray capitalize">
                                                                {key
                                                                    .split("_")
                                                                    .join(" ")}
                                                            </h4>
                                                            <p className="text-black-100 font-semibold">
                                                                {value}
                                                            </p>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </DialogPanel>
                                </TransitionChild>
                            </div>
                        </div>
                    </TransitionChild>
                </Dialog>
            </Transition>
        </>
    );
}

export default CarDetails;
