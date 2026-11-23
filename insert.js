
    const perHour = 7.5; // 시간당 차는 레진
    const maxResin = 200; // 최대 레진

    const input = prompt("현재 레진을 정수로 입력하세요");
    const now_les = parseInt(input, 10);

    if (isNaN(now_les) || now_les < 0 || now_les > maxResin) {
        alert("0에서 200 사이의 올바른 숫자를 입력해주세요.");
    } else if (now_les === maxResin) {
        alert("이미 레진이 가득 찼습니다.");
    } else {
        const remainHours = (maxResin - now_les) / perHour;
        
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

        alert(`${dayText}${hours}시 ${minutes}분에 레진이 다 차요!`);
    }
