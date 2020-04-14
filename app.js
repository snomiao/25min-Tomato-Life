
var NoteC_G = new Audio("NoteC_G.mp3");
var NoteG_C = new Audio("NoteG_C.mp3");
var 边沿检测器 = (值 = 0) => (新值) => (值 != 新值 ? (值 = 新值) : undefined)
var 检查番茄状态 = () => ((new Date().getMinutes()) % 30 < 25) && "工作时间" || "休息时间";
var 今天的第几个番茄 = () => (new Date() - new Date(new Date().toDateString())) / 1000 / 60 / 30 | 0

var 提醒现在是工作时间 = async () => await NoteC_G.play()
var 提醒现在是休息时间 = async () => await NoteG_C.play()

// 提醒现在是工作时间, 提醒现在是休息时间
var 边沿检测 = 边沿检测器()
var 刷新状态 = async () => {
    switch (边沿检测(检查番茄状态())) {
        case "工作时间":
            await 提醒现在是工作时间()
            break;
        case "休息时间":
            await 提醒现在是休息时间()
            break;
        case undefined:
            //状态未改变
            break;
        default:
            throw new Error("错误：未知状态")
    }
}
setInterval(刷新状态, 1000);