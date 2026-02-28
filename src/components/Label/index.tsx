import styled from '@emotion/styled';

const Conatiner = styled.div`
  flex: 1;
  font-size: 1.2rem;
`;

interface Props {
  readonly data: number | string;
}

export const Label = ({ data }: Props) => {
  return <Conatiner>{data}</Conatiner>;
};

// export class Label extends Component<Props> {
//   render() {
//     const { data } = this.props;
//     return <Conatiner>{data}</Conatiner>;
//   }
// }
