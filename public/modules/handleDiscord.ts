import { ipcMain } from 'electron';
import DiscordRPC from 'discord-rpc';
import { CLIENT_ID } from '../constants';

DiscordRPC.register(CLIENT_ID);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });
rpc
  .login({ clientId: CLIENT_ID })
  .then(() => console.log('DISCORD-RPC :: Discord-rpc LOGIN COMPLETE!'));

const startTimestamp = new Date();
const endTimestamp = new Date();
endTimestamp.setHours(endTimestamp.getHours() + 1);

let details = '일정 중';

const setActivity = () => {
  rpc.setActivity({
    details: details,
    state: '다음 일정: 산업기능요원 복무하기 (2년 동안)',
    startTimestamp,
    endTimestamp,
    largeImageKey: 'melktert',
    largeImageText: '일정 관리 앱 :: TART',
    instance: false,
  });
};

rpc.on('ready', () => {
  setActivity();

  setInterval(() => {
    console.log('TART :: rich-presence SEND');
    setActivity();
  }, 1e3);
});

ipcMain.on('discord-on', (e) => {
  console.log('IPC :: discord-on RECEIVED!');
  details = '정보대학 상임위원회 회의!';
});
