export const Practice4 = () => {
  const calcTotalFee = (num: number) => {
    // tsconfig.jsonのstrict:true を実行していると、型の指定をしていないとエラーになってしまう
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calcTotalFee(1000);

  return (
    <div>
      <p>練習問題:設定ファイル</p>
      <button onClick={onClickPractice}>連取問題4を実行</button>
    </div>
  );
};
