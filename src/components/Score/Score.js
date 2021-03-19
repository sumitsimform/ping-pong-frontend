import React, { useState, useEffect } from "react";
import { Button, Row, Col, Card, message } from "antd";
import { saveScore } from "state/actions/player";
import { withRouter } from "react-router-dom";
import { routes } from "config/routes";

const Score = ({ history, location }) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [player1score, setPlayer1Score] = useState(0);
  const [player2score, setPlayer2Score] = useState(0);
  const [players, setPlayers] = useState([]);

  const onFinish = async () => {
    setSubmitting(true);
    saveScore(
      players?.[0]?.id,
      players?.[1]?.id,
      player1score,
      player2score
    ).then(() => {
      message.success({
        content: "Game saved successfully",
      });
      setSubmitting(false);
      history.push(routes.loginpage.path);
    });
  };

  useEffect(() => {
    if (location?.data) {
      setPlayers(location?.data);
    } else {
      history.push(routes.loginpage.path);
    }
  }, []);

  return (
      <div className="LoginStyles">
         <Card style={{ width: 500 }} title="Start Game"
    >         <Row justify="space-between" gutter={[8,8]} >
          <Col>{players?.[0]?.name} </Col>
          <Col>
            <Button
              type="ghost"
              size="small"
              onClick={() => setPlayer1Score((v) => v + 1)}
            >
              Add win 
            </Button>
          </Col>
        </Row>
         <Row justify="space-between" gutter={[8,8]}>
          <Col>win </Col>
          <Col>{player1score}</Col>
        </Row>
         <Row justify="space-between" gutter={[8,8]}>
          <Col>{players?.[1]?.name} </Col>

          <Col>
            <Button
              type="ghost"
              size="small"
              onClick={() => setPlayer2Score((v) => v + 1)}
            >
              Add win
            </Button>
          </Col>
        </Row>
         <Row justify="space-between" gutter={[8,8]}>
          <Col>win</Col>
          <Col>{player2score}</Col>
        </Row>
        <hr />
         <Row justify="space-between" gutter={[8,8]}>
          <Col>Current winner  </Col>
          <Col>
            {player2score === player1score
              ? "  Draw"
              : player2score > player1score
              ? players?.[1]?.name
              : players?.[0]?.name}
          </Col>
        </Row >
         <Row justify="space-between" gutter={[8,8]}>
          <Col>Win difference</Col>
          <Col>
            {player2score > player1score
              ? player2score - player1score
              : player1score - player2score}
          </Col>
        </Row>

        <Button
          type="primary"
          size="medium"
          onClick={onFinish}
          loading={isSubmitting}
        >
          Save game
        </Button>
      
        </Card>
        </div>
    
  );
};

export default withRouter(Score);
