import styled from '@emotion/styled';
import { Title } from 'components/Title';
import { Button } from 'components/BasicButton';
interface Props {
  onClose: () => void;
}
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

const InputGroup = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-right: 8px;
  // width: 60px;
`;

const Input = styled.input`
  font-size: 1.2rem;
  // flex: 1;
  // width: 100%;
`;
const TextArea = styled.textarea`
  font-size: 1.2rem;
  flex: 1;
  // width: 100%;
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  aflex-direction: row;
  justify-content: center;
  gap: 16px;
`;
export const Form = ({ onClose }: Props) => {
  return (
    <Container>
      <Background />
      <Contents>
        <Title label="새 포스트 등록" />
        <InputGroup>
          <Label htmlFor="title">제목</Label>
          <Input id="title" type="text" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="body">내용</Label>
          <TextArea id="body" rows={5} />
        </InputGroup>
        <Actions>
          <Button label="취소" color="#304FFE" onClick={onClose} />
          <Button label="등록" onClick={onClose} />
        </Actions>
      </Contents>
    </Container>
  );
};
