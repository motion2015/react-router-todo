import styled from '@emotion/styled';
import { Title } from 'components/Title';

interface Props {
  readonly title: string;
  readonly body: string;
}
const Container = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin: 12px;
  border-radius: 10px;
  box-shadow:
    10px 10px 20px #d9d9d9,
    -10px -10px 20px #ffffff;
  max-width: 800px;
  width: calc(50% - 64px);
  max-width: 400px;
`;

const Body = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const BlogPost = ({ title, body }: Props) => {
  return (
    <Container>
      <Title label={title} />
      <Body>{body}</Body>
    </Container>
  );
};
