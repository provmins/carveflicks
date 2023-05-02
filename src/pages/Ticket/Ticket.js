import React, { useEffect, useState } from 'react';
import {
  Button,
  ButtonClose,
  TicketBox,
  TicketContainer,
  TicketPlace,
  TicketRegion,
  TicketTitle,
  TicketZone
} from './ticket-styled';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { isTicketOpen } from '../../store/reducer/popupSlice';

const Ticket = () => {
  const [region, setRegion] = useState([]);
  const [zone, setZone] = useState([]);
  const [regionFocus, setRegionFocus] = useState(0);
  const [zoneFocus, setZoneFocus] = useState();

  const dispatch = useDispatch();
  const open = useSelector(state => state.popup.ticket);

  useEffect(() => {
    (async () => {
      const response = await axios.get('/cinema');
      setRegion(response.data);
      setZone(response.data[0].zone);
    })();
  }, []);

  return (
    <TicketContainer>
      <TicketPlace open={open}>
        <TicketTitle>극장 선택</TicketTitle>
        <TicketBox>
          <TicketRegion>
            <p>지역별</p>
            <ul>
              {region.map(({ id, region, zone }, idx) => (
                <li
                  key={id}
                  onClick={() => {
                    setZone(zone);
                    setRegionFocus(idx);
                  }}
                  className={idx === regionFocus ? 'focus' : undefined}
                >
                  {region}
                </li>
              ))}
            </ul>
          </TicketRegion>
          <TicketZone>
            <p>시네마</p>
            <ul>
              {zone.map((zone, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    setZoneFocus(idx);
                  }}
                  className={idx === zoneFocus ? 'focus' : undefined}
                >
                  {zone}
                </li>
              ))}
            </ul>
          </TicketZone>
        </TicketBox>
        <Button disabled={zoneFocus === undefined} onClick={() => dispatch(isTicketOpen())}>
          선택 완료
        </Button>
        <ButtonClose to="/" onClick={() => dispatch(isTicketOpen())} />
      </TicketPlace>
    </TicketContainer>
  );
};

export default Ticket;
