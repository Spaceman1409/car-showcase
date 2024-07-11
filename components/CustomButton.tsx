"use client";

import { CustomButtonProps } from "@/types";

function CustomButton({
    title,
    containerStyles,
    handleClick,
    btnType,
}: CustomButtonProps) {
    return (
        <>
            <button
                className={`custom-btn ${containerStyles}`}
                disabled={false}
                type={btnType}
                onClick={handleClick}
            >
                <span className={`flex-1`}>{title}</span>
            </button>
        </>
    );
}

export default CustomButton;
