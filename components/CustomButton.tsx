"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

function CustomButton({
    title,
    containerStyles,
    handleClick,
    btnType,
    isDisabled,
    textStyles,
    rightIcon,
}: CustomButtonProps) {
    return (
        <>
            <button
                className={`custom-btn ${containerStyles}`}
                disabled={isDisabled}
                type={btnType || "button"}
                onClick={handleClick}
            >
                <span className={`flex-1 ${textStyles}`}>{title}</span>
                {rightIcon && (
                    <div className="relative h-6 w-6">
                        <Image
                            className="object-contain"
                            src={rightIcon}
                            alt="right-icon"
                            fill
                        />
                    </div>
                )}
            </button>
        </>
    );
}

export default CustomButton;
