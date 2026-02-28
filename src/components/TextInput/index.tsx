import styled from '@emotion/styled';
import { KeyboardEventHandler } from 'react';

interface Props {
  readonly value: string;
  readonly onChange: (text: string) => void;
  readonly onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}
const Input = styled.input`
  font-size: 1.2rem;
  padding: 8px;
`;

export const TextInput = ({ value, onChange, onKeyDown }: Props) => {
  return <Input value={value} onChange={(e) => onChange(e.target.value)} onKeyDown={onKeyDown} />;
};
