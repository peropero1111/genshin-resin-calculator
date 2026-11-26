
    const perHour = 7.5; // 시간당 차는 레진
    const maxResin = 200; // 최대 레진

   const choice = prompt("선택 :\n1. 레진 최대(200)까지 걸리는 시간\n2. 특정 값까지 걸리는 시간");

if (choice === "1" || choice === "2") {
    const nowInput = prompt("현재 레진을 정수로 입력하세요 (0 ~ 200):");
    const now_les = parseInt(nowInput, 10);

  
    if (isNaN(now_les) || now_les < 0 || now_les > maxResin) {
        alert("0에서 200 사이의 올바른 숫자를 입력해주세요.");
    } else {

        let targetResin = maxResin; 

        if (choice === "2") {
            const targetInput = prompt(`목표 레진을 입력하세요 (현재 ${now_les} ~ 최대 ${maxResin}):`);
            targetResin = parseInt(targetInput, 10);

       
            if (isNaN(targetResin) || targetResin <= now_les || targetResin > maxResin) {
                alert(`현재 레진(${now_les})보다 크고 ${maxResin} 이하인 숫자를 입력해주세요.`);
                targetResin = null;
            }
        }

        if (targetResin !== null) {
            if (now_les === targetResin) {
                alert("이미 목표 레진에 도달했습니다.");
            } else {
                const remainHours = (targetResin - now_les) / perHour;
                
                const now = new Date();
                const after_time = new Date(now.getTime() + remainHours * 60 * 60 * 1000);

                const dayDiff = Math.floor(
                    (new Date(after_time.getFullYear(), after_time.getMonth(), after_time.getDate()) - 
                     new Date(now.getFullYear(), now.getMonth(), now.getDate())) / (1000 * 60 * 60 * 24)
                );

                let dayText = "";
                if (dayDiff === 1) {
                    dayText = "내일 ";
                } else if (dayDiff === 2) {
                    dayText = "모레 ";
                }

                const hours = after_time.getHours();
                const minutes = after_time.getMinutes();

                alert(`${dayText}${hours}시 ${minutes}분에 레진이 ${targetResin}만큼 차요!`);
            }
        }
    }
} else if (choice === null) {
    alert("취소되었습니다.");
} else {
    alert("잘못된 입력입니다. 1~2번 중에서 선택해주세요.");
}
