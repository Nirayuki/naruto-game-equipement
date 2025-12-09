import React from "react";
import {
  useForm,
  Controller,
  FieldValues,
  FieldPath,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Constructor<T> = new (...args: any[]) => T;

type GridSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridProps = {
  xs?: GridSpan;
  sm?: GridSpan;
  md?: GridSpan;
  lg?: GridSpan;
  xl?: GridSpan;
};

const spanClassMap: Record<GridSpan, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12",
};

function gridClasses(grid?: GridProps) {
  if (!grid) return spanClassMap[12];
  const classes: string[] = [];
  if (grid.xs) classes.push(spanClassMap[grid.xs]);
  if (grid.sm) classes.push(`sm:${spanClassMap[grid.sm]}`);
  if (grid.md) classes.push(`md:${spanClassMap[grid.md]}`);
  if (grid.lg) classes.push(`lg:${spanClassMap[grid.lg]}`);
  if (grid.xl) classes.push(`xl:${spanClassMap[grid.xl]}`);
  return classes.join(" ") || spanClassMap[12];
}

type ControlType =
  | "text"
  | "number"
  | "textarea"
  | "select"
  | "checkbox"
  | "custom";

export type FormItem<TFieldValues extends FieldValues> = {
  fieldType: "field";
  name: FieldPath<TFieldValues>;
  label?: string;
  description?: string;
  controlType?: ControlType;
  fieldProps?: any;
  gridProps?: GridProps;
  render?: (ctx: {
    methods: UseFormReturn<TFieldValues>;
    name: FieldPath<TFieldValues>;
  }) => React.ReactNode;
};

export type FormGeneratorProps<TFieldValues extends FieldValues> = {
  onSuccess: (data: TFieldValues) => void;
  classValidator: Constructor<TFieldValues>;
  items: Array<FormItem<TFieldValues>>;
  defaultValues?: Partial<TFieldValues>;
  submitLabel?: string;
  className?: string;
};

export function FormGenerator<TFieldValues extends FieldValues>(
  props: FormGeneratorProps<TFieldValues>
) {
  const {
    onSuccess,
    classValidator,
    items,
    defaultValues,
    submitLabel = "Submit",
    className,
  } = props;

  const resolver = React.useMemo(
    () => classValidatorResolver(classValidator as any),
    [classValidator]
  );

  const methods = useForm<TFieldValues>({
    resolver,
    defaultValues: defaultValues as any,
    mode: "onSubmit",
    criteriaMode: "all",
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<TFieldValues> = (data) => {
    onSuccess(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("grid grid-cols-12 gap-4", className)}
    >
      {items.map((item, idx) => {
        const name = item.name;
        const errorForField = (errors as any)?.[name];

        return (
          <div key={`${name}-${idx}`} className={gridClasses(item.gridProps)}>
            <Field>
              {item.label && (
                <FieldLabel htmlFor={String(name)}>{item.label}</FieldLabel>
              )}
              <FieldContent>
                {item.render ? (
                  item.render({ methods, name })
                ) : item.controlType === "select" ? (
                  <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value as any}
                      >
                        <SelectTrigger id={String(name)}>
                          <SelectValue
                            placeholder={item.fieldProps?.placeholder}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {(item.fieldProps?.options || []).map((opt: any) => (
                            <SelectItem
                              key={String(opt.value)}
                              value={String(opt.value)}
                            >
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                ) : item.controlType === "textarea" ? (
                  <textarea
                    id={String(name)}
                    className="flex min-h-24 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    {...register(name)}
                    {...item.fieldProps}
                  />
                ) : item.controlType === "checkbox" ? (
                  <input
                    id={String(name)}
                    type="checkbox"
                    className="h-4 w-4 rounded border-input text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    {...register(name)}
                    {...item.fieldProps}
                  />
                ) : (
                  <Input
                    id={String(name)}
                    type={item.controlType === "number" ? "number" : "text"}
                    {...register(name)}
                    {...item.fieldProps}
                  />
                )}

                {item.description && (
                  <FieldDescription>{item.description}</FieldDescription>
                )}

                <FieldError
                  errors={errorForField ? [errorForField] : undefined}
                />
              </FieldContent>
            </Field>
          </div>
        );
      })}

      <div className="col-span-12">
        <Button type="submit" disabled={isSubmitting}>
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}

export default FormGenerator;
