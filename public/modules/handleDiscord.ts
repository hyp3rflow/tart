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

const activityDetails = {
  details: 'TART 실행 중',
  state: '디스코드 연동 일정 관리 앱 TART!',
  startTimestamp,
  endTimestamp,
  largeImageKey: 'melktert',
  largeImageText: '일정 관리 앱 :: TART',
  instance: false,
};

const setActivity = () => {
  console.log('IPC :: setActivity Called!');
  rpc.setActivity(activityDetails);
};

rpc.on('ready', () => {
  setActivity();

  setInterval(() => {
    console.log('TART :: rich-presence SEND');
    setActivity();
  }, 3e3);
});

ipcMain.on('changeCurrentSchedule', (event, ...args) => {
  console.log('IPC :: changeCurrentSchedult Called!');

  const { title, startTimestamp, endTimestamp } = args[0];

  activityDetails.details = title;
  activityDetails.startTimestamp = startTimestamp;
  activityDetails.endTimestamp = endTimestamp;
});