import { JitsiMeeting } from '@jitsi/react-native-sdk';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useRef } from 'react';

type MeetingProps = {
  route: any;
}

type Meeting = {
  id: number;
  name: string;
  room: string;
}

export const Meeting = ({ route }: MeetingProps) => {
  const jitsiMeeting = useRef(null);
  const { navigate } = useNavigation();

  const { room, name } = route.params as Meeting;

  const onReadyToClose = useCallback(() => {

    navigate('Home');

    if (jitsiMeeting.current) {
      (jitsiMeeting.current as any).close();
    }

  }, [navigate]);

  const eventListeners = {
    onReadyToClose
  };

  return (

    <JitsiMeeting
      config={{
        hideConferenceTimer: true,
        subject: name,
        customToolbarButtons: [
          {
            icon: "https://w7.pngwing.com/pngs/987/537/png-transparent-download-downloading-save-basic-user-interface-icon-thumbnail.png",
            id: "btn1",
            text: "Button one"
          }, {
            icon: "https://w7.pngwing.com/pngs/987/537/png-transparent-download-downloading-save-basic-user-interface-icon-thumbnail.png",
            id: "btn2",
            text: "Button two"
          }
        ]
      }}
      eventListeners={eventListeners as any}
      flags={{
        "invite.enabled": true
      }}
      ref={jitsiMeeting}
      style={{ flex: 1 }}
      room={room}
      serverURL={"https://meet.jit.si/"} />
  );
};

