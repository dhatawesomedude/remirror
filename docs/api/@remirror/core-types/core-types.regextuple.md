<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@remirror/core-types](./core-types.md) &gt; [RegexTuple](./core-types.regextuple.md)

## RegexTuple type

A tuple for use with the regex constructor.

<b>Signature:</b>

```typescript
export declare type RegexTuple = [string, string?];
```

## Remarks

Can be spread as parameters for the `RegExp` constructor

```ts
const params: RegExpTuple = ['\\/awesome', 'gi']
const regexp = new RegExp(...params);

```

