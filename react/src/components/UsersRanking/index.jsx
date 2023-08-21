import { ArrowFatUp, ArrowFatDown } from "phosphor-react";

// Styles import
import { Container } from "./styles";

// Assets import
import Avatar from "../../assets/avatar.svg";
import Trophy from "../../assets/trophy.svg";

const users = {
  promotionZone: [
    { placing: 1, name: "Vitor Rubim", xp: 635 },
    { placing: 2, name: "Kauê Caponero", xp: 517 },
  ],
  middle: [{ placing: 3, name: "Natan Cruz", xp: 318 }],
  relegationZone: [
    { placing: 4, name: "Gustavo Sorrilha", xp: 257 },
    { placing: 4, name: "Felipe Merlo", xp: 179 },
  ],
};

export function UsersRanking() {
  return (
    <Container>
      <header>
        <img src={Trophy} alt="that contains a trophy" />
        <p>Ranking</p>
      </header>

      <ul>
        {users.promotionZone.map((user) => (
          <li key={user.name}>
            <p>{user.placing}</p>

            <div>
              <img src={Avatar} alt="Foto de um usuário no rankin" />
              <span>{user.name}</span>
            </div>

            <p>{user.xp} XP</p>
          </li>
        ))}

        <div id="promotion-zone">
          <ArrowFatUp size={20} weight="fill" />
          <p>Zona de Promoção</p>
          <ArrowFatUp size={20} weight="fill" />
        </div>

        {users.middle.map((user) => (
          <li key={user.name}>
            <p>{user.placing}</p>

            <div>
              <img src={Avatar} alt="Foto de um usuário no rankin" />
              <span>{user.name}</span>
            </div>

            <p>{user.xp} XP</p>
          </li>
        ))}

        <div id="relegation-zone">
          <ArrowFatDown size={20} weight="fill" />
          <p>Zona de rebaixamento</p>
          <ArrowFatDown size={20} weight="fill" />
        </div>

        {users.relegationZone.map((user) => (
          <li key={user.name}>
            <p>{user.placing}</p>

            <div>
              <img src={Avatar} alt="Foto de um usuário no rankin" />
              <span>{user.name}</span>
            </div>

            <p>{user.xp} XP</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
