function countHours(year, holidays) {
    const dat = (e) => {
        return new Date(e + '/' + year).getDay();
    };

    return (
        holidays.filter((e) => {
            return ![0, 6].includes(dat(e));
        }).length * 2
    );
}
