
const NoteC_G = new Audio("NoteC_G.mp3");
const NoteG_C = new Audio("NoteG_C.mp3");
const 工作时间提醒 = async () => await NoteC_G.play()
const 休息时间提醒 = async () => await NoteG_C.play()
const 边沿检测器 = (值 = 0) => (新值) => (值 != 新值 ? (值 = 新值) : undefined)
const 番茄状态检查 = () => ((new Date().getMinutes()) % 30 < 25) && "工作时间" || "休息时间";
const 今天的第几个番茄 = () => (new Date() - new Date(new Date().toDateString())) / 1000 / 60 / 30 | 0

// 工作时间提醒, 休息时间提醒
var 边沿检测 = 边沿检测器()
var 循环 = async () => {
    var 状态动作表 = {
        '工作时间': 工作时间提醒,
        '工作时间': 休息时间提醒,
    };
    var 状态动作 = 状态动作表[边沿检测(番茄状态检查())];
    状态动作 && await 状态动作()
}
setInterval(循环, 1000);
