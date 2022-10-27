import type { PresetDate } from './interface';

export interface PresetPanelProps<T> {
  prefixCls: string;
  presets: PresetDate<T>[];
  onClick: (value: T) => void;
  onHover?: (value: T) => void;
}

export default function PresetPanel<T>(props: PresetPanelProps<T>) {
  const { prefixCls, presets, onClick, onHover } = props;

  if (!presets.length) {
    return null;
  }

  return (
    <div className={`${prefixCls}-presets`}>
      <ul>
        {presets.map(({ label, value }, index) => (
          <li
            key={index}
            onClick={() => {
              onClick(value);
            }}
            onMouseEnter={() => {
              onHover?.(value);
            }}
            onMouseLeave={() => {
              onHover?.(null);
            }}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
