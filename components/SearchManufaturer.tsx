"use client";

import React, { Fragment, useState } from "react";
import Image from "next/image";
import { manufacturers } from "@/constants";
import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    Transition,
} from "@headlessui/react";

function SearchManufaturer({ selected, setSelected }) {
    const [query, setQuery] = useState("");

    const filteredManufacturers =
        query === ""
            ? manufacturers
            : manufacturers.filter((item) =>
                  item
                      ?.toLowerCase()
                      .replace(/\+/g, "")
                      .includes(query.toLowerCase().replace(/\+/g, ""))
              );

    return (
        <>
            <div className="search-manufacturer">
                <Combobox value={selected} onChange={setSelected}>
                    <div className="w-full relative">
                        <ComboboxButton className="absolute top-[15px]">
                            <Image
                                className="ml-4"
                                src="/car-logo.svg"
                                alt="car-logo"
                                width={20}
                                height={20}
                            />
                        </ComboboxButton>
                        <ComboboxInput
                            className="search-manufacturer__input"
                            placeholder="Volkswagen"
                            displayValue={(manufaturer: string) => manufaturer}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            afterLeave={() => setQuery("")}
                        >
                            <ComboboxOptions>
                                {filteredManufacturers?.map((item) => (
                                    <ComboboxOption
                                        key={item}
                                        value={item}
                                        className={({ focus }) =>
                                            `relative search-manufacturer__option ${
                                                focus
                                                    ? "bg-primary-blue text-white"
                                                    : "text-gray-900"
                                            }`
                                        }
                                    >
                                        {({ selected, focus }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${
                                                        selected
                                                            ? "font-medium"
                                                            : "font-normal"
                                                    }`}
                                                ></span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                            focus
                                                                ? "text-white"
                                                                : "text-teal-600"
                                                        }`}
                                                    ></span>
                                                ) : null}
                                            </>
                                        )}
                                    </ComboboxOption>
                                ))}
                            </ComboboxOptions>
                        </Transition>
                    </div>
                </Combobox>
            </div>
        </>
    );
}

export default SearchManufaturer;
