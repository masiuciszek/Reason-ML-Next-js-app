import {
  Code as RadixCode,
  type CodeProps,
  Heading,
  type HeadingProps,
  Strong as RadixStrong,
  type StrongProps,
  Text,
  type TextProps,
} from "@radix-ui/themes";

import {cn} from "../lib/cn";

export function H1(props: HeadingProps) {
  return <Heading size="9" {...props} as="h1" />;
}

export function H2(props: HeadingProps) {
  return <Heading size="8" {...props} as="h2" />;
}

export function H3(props: HeadingProps) {
  return <Heading size="7" {...props} as="h3" />;
}

export function H4(props: HeadingProps) {
  return <Heading size="6" {...props} as="h4" />;
}

export function H5(props: HeadingProps) {
  return <Heading size="5" {...props} as="h5" />;
}

export function P(props: TextProps) {
  return <Text size="3" as="p" {...props} />;
}
export function Span(props: TextProps) {
  return <Text as="span" {...props} />;
}
export function Label(props: TextProps) {
  return <Text as="label" {...props} />;
}

export function Muted(props: TextProps) {
  return <Text as="p" {...props} color="gray" />;
}

export function Lead(props: TextProps) {
  return (
    <Text
      color="gray"
      as="p"
      size="6"
      {...props}
      className={cn("opacity-80", props.className)}
    />
  );
}
export function Code(props: CodeProps) {
  return <RadixCode {...props} />;
}
export function Strong(props: StrongProps) {
  return <RadixStrong {...props} />;
}
