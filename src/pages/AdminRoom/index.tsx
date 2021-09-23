import { useParams, useHistory } from "react-router-dom";

import { database } from "../../services/firebase";
import toast from "react-hot-toast";

import logoImg from "../../assets/images/logo.svg";
import deleteImg from "../../assets/images/delete.svg";
import checkImg from "../../assets/images/check.svg";
import answerImg from "../../assets/images/answer.svg";

import { Button } from "../../components/Button";
import { Question } from "../../components/Question";
import { RoomCode } from "../../components/RoomCode";
import { useRoom } from "../../hooks/useRoom";

import "./styles.scss";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { questions, title } = useRoom(roomId);

  async function handleEndRoom() {
    await database
      .ref(`rooms/${roomId}`)
      .update({
        endedAt: new Date(),
      })
      .then(() => {
        toast.success("Sala encerrada.", {
          icon: "✔",
        });
      })
      .catch((err) => {
        toast.error("Não foi possível encerrar a sala.");
      });

    history.push("/");
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que você deseja excluir esta pergunta?")) {
      await database
        .ref(`rooms/${roomId}/questions/${questionId}`)
        .remove()
        .then(() => {
          toast.success("Pergunta excluída!", {
            icon: "🙈",
          });
        })
        .catch((err) => {
          toast.error("Não foi possível excluir a pergunta.");
        });
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database
      .ref(`rooms/${roomId}/questions/${questionId}`)
      .update({
        isAnswered: true,
      })
      .then(() => {
        toast.success("Pergunta respondida!", {
          icon: "💯",
        });
      })
      .catch((err) => {
        toast.error("Não foi possível marcar a pergunta como respondida.");
      });
  }

  async function handleHighlightQuestion(
    questionId: string,
    isHighlighted: boolean
  ) {
    await database
      .ref(`rooms/${roomId}/questions/${questionId}`)
      .update({
        isHighlighted: !isHighlighted,
      })
      .then(() => {
        toast.success(
          `${!isHighlighted ? "Pergunta destacada!" : "Destaque retirado!"}`,
          {
            icon: `${!isHighlighted ? "🧡" : "💔"}`,
          }
        );
      })
      .catch((err) => {
        toast.error("Não foi possível destacar a pergunta.");
      });
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button onClick={handleEndRoom} isOutlined>
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <img
                        src={checkImg}
                        alt="Marcar pergunta como respondida"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        handleHighlightQuestion(
                          question.id,
                          question.isHighlighted
                        )
                      }
                    >
                      <img src={answerImg} alt="Dar destaque à pergunta" />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remover pergunta" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}
