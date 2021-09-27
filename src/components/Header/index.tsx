import { RoomCode } from "../RoomCode";
import { Container, Content, Interaction } from "./styles";
import logoImg from "../../assets/images/logo.svg";
import { ThemeToggleButton } from "../ThemeToggleButton";

type HeaderProps = {
  roomId: string;
};

export function Header({ roomId }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Letmeask" />
        <Interaction>
          <RoomCode code={roomId} />
          <ThemeToggleButton />
        </Interaction>
      </Content>
    </Container>
  );
}
