import dayjs from 'dayjs';

export default function gen_detail(count, list, options) {
    let list_content = "";
    for (let i in list) {
        let reply_content = "";

        if (list[i].replies) {
            reply_content += "<hr/>";
            for (let j of list[i].replies) {
                if (!j.deleted) {
                    reply_content += `
                    <div class="reply">
                        <div class="avatar">
                            <img src="${j.avatar || "https://cravatar.cn/avatar/?d=mp"}" class="avatar-img">
                        </div>
                        <div class="cmt-main" style="display: inline;">
                            <div class="cmt-data">
                                <span><strong>${j.nickname}</strong> · <span class="cmt_date">${dayjs(j.timestamp).format("YYYY-MM-DD HH:mm")}</span></span>
                                <span class="hover_show" onclick="detalk.delete('${list[i].rpid}')">删除</span>
                            </div>
                            <div class="cmt-content">
                                ${j.content}
                            </div>
                        </div>
                    </div>`;
                }
            }
        }
        list_content += `
            <div class="mr-cmt" onclick="detalk.reply('${list[i].rpid}', '${list[i].nickname}')">
                <div class="avatar">
                    <img src="${"https://cravatar.cn/avatar/"+list[i].email+"?d=mp" || "https://cravatar.cn/avatar/?d=mp"}" class="avatar-img">
                </div>
                <div class="cmt-main">
                    <div class="cmt-data">
                        <span><strong>${list[i].nickname}</strong> · <span class="cmt_date">${dayjs(list[i].timestamp).format("YYYY-MM-DD HH:mm")}</span></span>
                        <span class="hover_show" onclick="detalk.delete('${list[i].rpid}')">删除</span>
                    </div>
                    <div class="cmt-content">
                        ${list[i].content}
                    </div>
                    <div class="replies">
                        ${reply_content}
                    </div>
                </div>
            </div>`;
    }
    return `
    <div class="comment-title">
        <h3>共 ${count} 条评论<span class="filter" onclick="detalk.load('${options.url}','${options.path}',${options.mode ? 0 : 1});">${options.mode ? "正序" : "倒叙"}</span></h3>
    </div>
    <div class="comment-list">
        ${list_content}
    </div>
    `;
}