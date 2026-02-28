import styled from '@emotion/styled';
import { Button } from 'components/BasicButton';
import { Label } from 'components/Label';

interface Props {
  readonly label: string;
  readonly onDelete?: () => void;
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: justify-content;
  gap: 16px;
  margin-bottom: 16px;
`;

export const TodoItem = ({ label, onDelete }: Props) => {
  return (
    <Container>
      <Label data={label} />
      <Button label="삭제" onClick={onDelete} />
    </Container>
  );
};
