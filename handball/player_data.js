const PLAYER_DATA = {
  home: {
    teamName: '南風高校',
    gk: { no: 1, name: 'まおたろう', h: 150, stm: 30, spd: 30, sht: 55, jmp: 30, pos: 'GK' },
    field: [
      { no: 2, name: 'れなインバース', h: 156, stm: 50, spd: 40, sht: 50, jmp: 35, pos: 'PV' },
      { no: 6, name: 'みゅー', h: 145, stm: 45, spd: 47, sht: 45, jmp: 40, pos: 'CB' },
      { no: 3, name: 'りこピン', h: 155, stm: 48, spd: 42, sht: 40, jmp: 38, pos: 'LB' },
      { no: 4, name: 'はるこ', h: 153, stm: 45, spd: 45, sht: 35, jmp: 45, pos: 'RW' },
      { no: 3, name: 'ことミカン', h: 159, stm: 46, spd: 45, sht: 43, jmp: 42, pos: 'RB' },
      { no: 8, name: 'ゆなっしー', h: 148, stm: 40, spd: 38, sht: 42, jmp: 32, pos: 'LW' }
    ]
  },
  away: {
    teamName: '一般参加者',
    gk: { no: 1, name: 'パパ', h: 182, stm: 75, spd: 75, sht: 55, jmp: 75, pos: 'GK' },
    field: [
      { no: 2, name: 'ぼく', h: 135, stm: 25, spd: 25, sht: 25, jmp: 25, pos: 'CB' },
      { no: 3, name: 'ママ', h: 151, stm: 30, spd: 30, sht: 25, jmp: 25, pos: 'RB' },
      { no: 4, name: 'タマ', h: 50, stm: 30, spd: 70, sht: 10, jmp: 90, pos: 'LB' }
    ]
  },
  opponent2: {
    teamName: 'ヤンキーズ',
    gk: { no: 1, name: '銀次', h: 182, stm: 35, spd: 50, sht: 55, jmp: 35, pos: 'PV2' },
    field: [
      { no: 5, name: '時嵐', h: 172, stm: 32, spd: 58, sht: 60, jmp: 38, pos: 'LW' },
      { no: 8, name: 'ジョニー', h: 176, stm: 30, spd: 55, sht: 68, jmp: 32, pos: 'LB' },
      { no: 4, name: '夜路死苦', h: 170, stm: 30, spd: 52, sht: 65, jmp: 30, pos: 'CB' },
      { no: 2, name: '上等', h: 174, stm: 38, spd: 54, sht: 62, jmp: 35, pos: 'PV' },
      { no: 3, name: '悪魔', h: 173, stm: 36, spd: 55, sht: 68, jmp: 32, pos: 'RB' },
      { no: 6, name: 'BOLT', h: 175, stm: 34, spd: 53, sht: 60, jmp: 35, pos: 'RW' }
    ]
  },
  opponent3: {
    teamName: 'かくれ高校',
    gk: { no: 1, name: '空', h: 170, stm: 50, spd: 50, sht: 50, jmp: 50, pos: 'GK' },
    field: [
      { no: 2, name: '霞', h: 165, stm: 45, spd: 55, sht: 45, jmp: 45, pos: 'LW' },
      { no: 3, name: '朧', h: 168, stm: 45, spd: 52, sht: 48, jmp: 42, pos: 'LB' },
      { no: 4, name: '影', h: 170, stm: 50, spd: 60, sht: 40, jmp: 50, pos: 'CB' },
      { no: 5, name: '虚', h: 175, stm: 55, spd: 45, sht: 45, jmp: 45, pos: 'PV' },
      { no: 6, name: '無', h: 165, stm: 45, spd: 55, sht: 45, jmp: 45, pos: 'RB' },
      { no: 7, name: '幻', h: 160, stm: 40, spd: 65, sht: 40, jmp: 40, pos: 'RW' }
    ]
  },
  opponent5: {
    teamName: '韋駄天高校',
    gk: { no: 23, name: '関川', h: 160, stm: 40, spd: 100, sht: 51, jmp: 40, pos: 'GK' },
    field: [
      { no: 15, name: '福本', h: 161, stm: 40, spd: 100, sht: 50, jmp: 40, pos: 'LW' },
      { no: 14, name: '屋敷', h: 160, stm: 42, spd: 100, sht: 55, jmp: 40, pos: 'LB' },
      { no: 6, name: '周東', h: 161, stm: 48, spd: 200, sht: 51, jmp: 40, pos: 'CB' },
      { no: 51, name: 'イチロー', h: 172, stm: 45, spd: 130, sht: 52, jmp: 40, pos: 'RW' },
      { no: 7, name: '松本', h: 160, stm: 40, spd: 100, sht: 50, jmp: 40, pos: 'PV' },
      { no: 1, name: '鈴木', h: 161, stm: 42, spd: 150, sht: 52, jmp: 40, pos: 'RB' }
    ]
  },
  opponent6: {
    teamName: '選抜オールスター',
    gk: { no: 1, name: 'まおたろう', h: 150, stm: 30, spd: 30, sht: 55, jmp: 30, pos: 'GK' },
    field: [
      { no: 2, name: '霞', h: 165, stm: 45, spd: 55, sht: 45, jmp: 45, pos: 'LW' },
      { no: 4, name: 'タマ', h: 50, stm: 30, spd: 70, sht: 10, jmp: 90, pos: 'LB' },
      { no: 6, name: '周東', h: 161, stm: 48, spd: 200, sht: 51, jmp: 40, pos: 'CB' },
      { no: 7, name: '銀次', h: 182, stm: 35, spd: 50, sht: 55, jmp: 35, pos: 'PV' },
      { no: 51, name: 'イチロー', h: 172, stm: 45, spd: 130, sht: 52, jmp: 40, pos: 'RW' },
      { no: 77, name: '宮崎大輔', h: 180, stm: 100, spd: 100, sht: 100, jmp: 100, pos: 'RB' }
    ]
  }
};