import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import cn from "classnames";
import { Link } from "react-router-dom";
import LanguageDetector from "../../hooks/LanguageDetector/LanguageDetector";

const VARIANTS = ["primary", "secondary", "tertiary", "quaternary"] as const;

const VARIANTS_CLASSNAMES: { [key: string]: string } = {
  primary:
    "flex items-center justify-center px-2 text-heading rounded bg-gradient-to-r from-primary to-gradientColor hover:from-primaryBtnHoverFrom hover:to-primaryBtnHoverTo",
  secondary:
    "flex text-white items-center justify-center bg-transparent px-2 border border-primary rounded cursor-pointer hover:bg-secondaryBtnHoverBg",
  tertiary:
    "bg-transparent flex items-center justify-center text-primary px-2 cursor-pointer hover:text-tertiaryBtnHoverBg",
};

const DEFAULT_DIMENSIONS = "h-[50px] w-[210px] md:h-[60px]";

type ButtonProps = {
  text: string;
  variant?: (typeof VARIANTS)[number];
  href?: string;
  onClick?: () => void;
  className?: string;
  cleanDimensions?: boolean;
  fullClean?: boolean;
  withArrow?: boolean;
  icon?: React.ReactNode;
};

const withLink = (
  href: string,
  className: string,
  children: React.ReactNode
) => {
  return (
    <Link to={href} className={className}>
      <button className="flex items-center justify-center">{children}</button>
    </Link>
  );
};

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  href,
  onClick,
  className,
  cleanDimensions = false,
  fullClean = false,
  withArrow = false,
  icon,
  ...props
}) => {
  const [lang, setLang] = useState<string | null>("");

  LanguageDetector(setLang);

  const finalClassName = cn(
    !fullClean && (VARIANTS_CLASSNAMES[variant] as string),
    !cleanDimensions && DEFAULT_DIMENSIONS,
    className
  );

  const buttonContent = (
    <>
      {text}

      {withArrow && !!!icon ? (
        lang === "ar" ? (
          <FiChevronLeft className="text-[20px] ms-4" />
        ) : (
          <FiChevronRight className="text-[20px] ms-4" />
        )
      ) : null}

      {icon && icon}
    </>
  );

  if (href) return withLink(href, finalClassName, buttonContent);

  const btn = (
    <button onClick={onClick} className={finalClassName} {...props}>
      {buttonContent}
    </button>
  );

  return btn;
};

export default Button;
