import React, { useState } from 'react';

type AppIconProps = {
  name: string;
  iconPath: string;
  sizeClassName: string;
  preferDarkBackdrop?: boolean;
  imageClassName?: string;
};

const AppIcon: React.FC<AppIconProps> = ({
  name,
  iconPath,
  sizeClassName,
  preferDarkBackdrop = false,
  imageClassName,
}) => {
  const [hasError, setHasError] = useState(false);
  const backdropClassName = preferDarkBackdrop
    ? 'bg-slate-950 ring-slate-800'
    : 'bg-slate-100 ring-slate-200';
  const resolvedImageClassName = imageClassName ?? (preferDarkBackdrop
    ? 'h-full w-full object-contain p-1.5'
    : 'h-full w-full object-cover');

  return (
    <div className={`relative shrink-0 overflow-hidden ring-1 ${backdropClassName} ${sizeClassName}`}>
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-blue-50 text-3xl font-bold text-blue-600">
          {name.charAt(0)}
        </div>
      ) : null}
      <img
        src={iconPath}
        alt={`${name} icon`}
        className={resolvedImageClassName}
        onError={() => {
          setHasError(true);
        }}
      />
    </div>
  );
};

export default AppIcon;