import axios from "axios";
import { player } from "helpers/api";

export const login = async (player_1, player_2) => {
  try {
    const {
      data: { players },
    } = await axios.post(player.REGISTER, { players: [player_1, player_2] });

    return players;
  } catch (e) {
    throw e;
  }
};

export const saveScore = async (player1, player2, player1Win, player2Win) => {
  try {
    await axios.post(player.ADDGAMES, {
      player1,
      player2,
      player1Win,
      player2Win,
    });
  } catch (e) {
    throw e;
  }
};
