<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@remirror/react-hooks](./react-hooks.md)

## react-hooks package

## Interfaces

|  Interface | Description |
|  --- | --- |
|  [DOMRectReadOnlyLike](./react-hooks.domrectreadonlylike.md) |  |

## Variables

|  Variable | Description |
|  --- | --- |
|  [useEffectOnce](./react-hooks.useeffectonce.md) | React lifecycle hook that runs an effect only once. |
|  [useEffectOnUpdate](./react-hooks.useeffectonupdate.md) | React effect hook that ignores the first invocation (e.g. on mount). |
|  [useMeasure](./react-hooks.usemeasure.md) | Provides the measurements for a react element at the point of layout. |
|  [usePrevious](./react-hooks.useprevious.md) | Preserves the previous version of a provided value.
```tsx
const [isOpen, setOpen] = useState<boolean>(false)
const previous = usePrevious(isOpen)

return <span onClick={() => setOpen(!isOpen)}>{isOpen && previous === isOpen ? 'Stable' : 'Unstable' }</span>

```
 |
|  [useSetState](./react-hooks.usesetstate.md) | A replication of the setState from class Components. |
|  [useStateWithCallback](./react-hooks.usestatewithcallback.md) | Enables the use of state with an optional callback parameter in the setState value. |
|  [useTimeouts](./react-hooks.usetimeouts.md) | A hook for managing multiple timeouts. |
|  [useUnmount](./react-hooks.useunmount.md) | React lifecycle hook that calls a function when the component will unmount.<!-- -->Try <code>useEffectOnce</code> if you need both a mount and unmount function.
```jsx
import {useUnmount} from 'react-use';

const Demo = () => {
  useUnmount(() => log('UNMOUNTED'));
  return null;
};

```
 |

## Type Aliases

|  Type Alias | Description |
|  --- | --- |
|  [DispatchWithCallback](./react-hooks.dispatchwithcallback.md) |  |
|  [PartialSetStateAction](./react-hooks.partialsetstateaction.md) |  |

