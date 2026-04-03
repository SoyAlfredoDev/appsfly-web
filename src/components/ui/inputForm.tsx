"use client";

export default function InputForm({
  id,
  label,
  type,
  placeholder,
  required = false,
}: {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="relative w-full mb-2">
      <input
        id={id}
        type={type}
        placeholder=" " // importante para el efecto
        className="peer w-full rounded-xl border border-gray-400 px-4 pt-6 pb-2 text-gray-800 
        focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent
        transition"
        required={required}
      />

      <label
        htmlFor={id}
        className="
          absolute left-4 top-2 text-sm text-gray-500 
          transition-all duration-200
          
          peer-placeholder-shown:top-3
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray-400
          
          peer-focus:top-2
          peer-focus:text-sm
          peer-focus:text-accent
        "
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
    </div>
  );
}
