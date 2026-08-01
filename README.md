# how-to-use-kimi

> **หลักเดียวที่ต้องจำ:** เลือก Agent/Tool ตาม _ความเสี่ยงของงาน_ ไม่ใช่ตามฟีเจอร์
> ทุ่มความฉลาดตรงที่พลาดแล้วเจ็บ — ประหยัดตรงที่พลาดแล้วแก้ง่าย

* * *

## 1. รู้จักทีมของคุณ

| Agent/โหมด | บทบาท | ถนัด |
| --- | --- | --- |
| **Kimi (Default)** | 🧠 สมอง + ✋ มือ | ถามตอบทั่วไป, เขียนโค้ด, วิเคราะห์, สรุปเนื้อหา |
| **ok-computer** | 🎨 นักออกแบบ | ออกแบบ UI/UX, ไอคอน, โลโก้, visual asset, สร้างสรรค์ |
| **websites** | 🌐 สร้างเว็บ | React, Ant Design, Vue, HTML/CSS/JS, component-based UI |
| **researcher** | 🔍 นักค้นคว้า | ค้นหาข้อมูลลึก, วิเคราะห์, ตรวจสอบข้อเท็จจริง, งานวิชาการ |
| **Kimi Claw** | 🕷️ นักสำรวจ | Web crawling, ดึงข้อมูลจากเว็บ, สำรวจลิงก์ลึก |

**ลำดับที่ถูกต้องเสมอ:**

```
researcher หาข้อมูล  →  Kimi คิด/วางแผน  →  ok-computer ออกแบบ  →  websites ลงมือ  →  Kimi review
```

อย่าให้ ok-computer นำหน้าเมื่องานต้องการโครงสร้างที่แข็งแรง — มันออกแบบสวย แต่ต้องมีโครงจาก Kimi ก่อน แล้ว ok-computer ค่อยแต่งหน้าให้สวย

* * *

## 2. สูตรสำเร็จทุกโปรเจกต์

```
1. researcher หาข้อมูล + ตรวจสอบ facts            (เริ่มต้น — ข้อมูลถูกต้องคุ้มสุด)
2. Kimi       วางแผน + ออกแบบ architecture        (ครั้งเดียว — จ่ายแพงตรงนี้คุ้มสุด)
3. websites   ลงมือเขียนโค้ด / สร้าง UI          (ส่วนใหญ่ของงาน)
4. ok-computer เกลาดีไซน์ ปรับ visual             (ตอนท้าย — ให้สวย)
5. Kimi       กลับมาตอนติด + review ก่อนจบ      (QA สุดท้าย)
```

**กฎเหล็ก 3 ข้อ — ไม่มีข้อยกเว้น:**

1. **แตะเงิน = Kimi (Default) อย่างระมัดระวัง** ต่อให้ดูง่ายแค่ไหน (idempotency, race, double-spend คือกับดักที่ _ดูง่าย_)
2. **auth / สิทธิ์ / validation = อย่างน้อย Kimi (Default)** ห้ามประมาท — validation พลาดจุดเดียว ประตูเปิดทั้งบ้าน
3. **รอยต่อระหว่างระบบ = Kimi (Default)** บั๊กร้ายแรงไม่ได้อยู่ _ใน_ ระบบ แต่อยู่ _ระหว่าง_ ระบบ

* * *

## 3. แบ่งตามสายงาน

### Frontend

| งาน | Agent |
| --- | --- |
| ออกแบบ UI/UX, วาง component architecture, ออกแบบไอคอน/โลโก้ | ok-computer |
| เขียน component, Figma→code, styling, React + AntD | websites |
| แก้ CSS จิ๊บๆ, rename props, responsive | Kimi (Default) |
| debug state/render ที่งง | Kimi (Default) |
| สร้าง Widget interactive (charts, forms, calculators) | Kimi (Default) + `show_widget` |

### Backend

| งาน | Agent |
| --- | --- |
| ออกแบบ API, schema, data model | Kimi (Default) |
| endpoint, business logic, CRUD | Kimi (Default) |
| validation, error handling | Kimi (Default) (ห้ามประมาท) |
| test, boilerplate, DTO | Kimi (Default) |
| debug race / N+1, optimize query | Kimi (Default) |
| ดึงข้อมูล finance/stock/economy/law | Kimi (Default) + `get_data_source` |

### DevOps / Data

| งาน | Agent |
| --- | --- |
| ออกแบบ CI/CD, infra architecture | Kimi (Default) |
| Dockerfile, CI yaml | Kimi (Default) |
| แก้ config, env var, bump version | Kimi (Default) |
| debug pipeline พัง (cert/network/permission) | Kimi (Default) |
| วิเคราะห์ข้อมูล, สร้างกราฟ | Kimi (Default) + `ipython` |
| ดึงข้อมูลจากแหล่งข้อมูลจริง (Yahoo, World Bank, IMF, กฎหมายไทย) | Kimi (Default) + `get_data_source` |

### Research & Content

| งาน | Agent |
| --- | --- |
| ค้นหาข้อมูลลึกจากหลายแหล่ง | researcher |
| ตรวจสอบข้อเท็จจริง | researcher |
| สรุปรายงานวิชาการ | researcher |
| แปลภาษา / สรุปเนื้อหา | Kimi (Default) |
| เขียน copy, headline, CTA, microcopy | Kimi (Default) |

* * *

## 4. เคสจริง

### 🌐 Landing Page — งานเบา ประหยัดได้เต็มที่

```
researcher  หา reference + ตัวอย่างเว็บที่ชอบ
Kimi        วาง layout + สไตล์ + โครงสร้าง (ครั้งเดียว)
websites    เขียน HTML/CSS/React จริง + วนแก้กับ Preview
ok-computer ปรับดีไซน์ ไอคอน สี ให้ premium
Kimi        responsive, SEO meta, เก็บรายละเอียดท้าย
```

**ท่าเร็วสุด:** Kimi ทำ mockup ใน Widget → วนแก้จนชอบ → websites ขยายเป็นโปรเจกต์จริง → ok-computer เกลาดีไซน์
**กุญแจ:** ส่งลิงก์เพจที่ชอบมาเป็นตัวอย่าง + บอกกลุ่มลูกค้า — ดีกว่าบอก "ทำให้สวย" ลอยๆ สิบเท่า

### 🏪 ERP / POS — งานเสี่ยงสูง แบ่งตามความเสี่ยง

| โมดูล | ความเสี่ยง | Agent |
| --- | --- | --- |
| 💰 ชำระเงิน, บิล, ทอนเงิน, ปิดยอด | สูงสุด | **Kimi (Default) ทั้งหมด** |
| 📦 สต็อก, ตัดสต็อก, รับเข้า | สูงสุด | **Kimi (Default)** |
| 🧾 บัญชี, ledger, ภาษี | สูงสุด | **Kimi (Default)** |
| 👤 พนักงาน, สิทธิ์, กะ | สูง | Kimi ออกแบบ / Kimi เขียน |
| 🛒 หน้าขาย, ตะกร้า, บาร์โค้ด | กลาง | Kimi (Default) |
| 📊 dashboard, รายงาน, CRUD สินค้า | ต่ำ–กลาง | Kimi (Default) |
| 🎨 ฟอร์ม, template ใบเสร็จ | ต่ำ | Kimi (Default) |

**กับดัก POS ที่ดู "ง่าย" แต่ฆ่าร้าน — ต้อง Kimi:**

- ตัดสต็อก + บันทึกขาย ต้อง **atomic** (ขายแล้วสต็อกไม่ลด = ของหาย)
- สองแคชเชียร์ขายชิ้นสุดท้ายพร้อมกัน → สต็อกติดลบ
- **Offline mode** — เน็ตหลุดต้องขายต่อได้ แล้ว sync ไม่ให้ยอดชน (ยากสุดใน POS)
- ปิดยอดสิ้นวันต้องตรงเป๊ะกับบิลทุกใบ
- เงิน คำนวณเป็น integer (สตางค์) — **ห้าม float**

**ลำดับ:**

```
Phase 0  Kimi   contract ขาย/สต็อก/บัญชี + แผน offline (ตัดสินใจตั้งแต่ต้น)
Phase 1  Kimi   core เงิน + ตัดสต็อก        │ Kimi  POS UI + CRUD (ขนาน)
Phase 2  Kimi   เชื่อม ขาย×สต็อก×บัญชี + ปิดยอด
Phase 3  Kimi   ใบเสร็จ ฟอร์ม รายงาน test data
Review   Kimi   ไล่ path เงิน+สต็อก ก่อน go-live
```

### 🎨→⚙️ UI เสร็จแล้ว แต่ยังไม่ได้ออกแบบ Backend

ยังเป็นงาน "ออกแบบ" → **Kimi (Default)** ไม่เปลี่ยน แต่เคสนี้มีข้อได้เปรียบ: **UI ที่เสร็จแล้ว = สเปคของ Backend ฟรีๆ**

```
ทุกหน้าจอ  → บอกว่าต้องมี API อะไร คืนข้อมูลอะไร
ทุกปุ่ม    → บอกว่าต้องมี action/endpoint อะไร
ทุกฟอร์ม   → บอกว่ารับ input อะไร validate อะไร
ทุก state  → loading/error/empty บอกว่า API fail แบบไหนได้บ้าง
```

| ขั้น | งาน | Agent |
| --- | --- | --- |
| 1 | ไล่อ่าน UI ทุกหน้า → สกัดเป็น API contract | **Kimi (Default)** |
| 2 | ออกแบบ data model / schema จาก contract | **Kimi (Default)** |
| 3 | ตัดสินใจโครง: auth, sync/async, ownership ของ data | **Kimi (Default)** |
| 4 | เขียน endpoint ตาม contract | Kimi (Default) |
| 5 | เชื่อม UI เข้า API จริง | Kimi (Default) |
| 6 | test, mock data, boilerplate | Kimi (Default) |

**⚠️ กับดักเคสนี้:** อย่าออกแบบ backend ตาม UI เป๊ะเกินไป — UI เปลี่ยนบ่อยกว่า backend เสมอ

- ❌ endpoint 1 อันต่อ 1 หน้าจอ (`/api/home-page-data`) → UI เปลี่ยนที backend พังที
- ✅ ออกแบบตาม **resource จริง** (`/users`, `/orders`) แล้วให้หน้าจอประกอบเอา

นี่คือเหตุผลที่ต้อง Kimi — ต้องถอยมามองว่า _ข้อมูลจริงของระบบคืออะไร_ แล้วออกแบบให้ทนต่อการเปลี่ยน UI

### 🔗 ระบบใหญ่โยงกัน (แชต + การเงิน + สมาชิก)

หลักเดียวกับ POS: **การเงิน = Kimi ทั้งหมด · สมาชิก = Kimi ออกแบบ/Kimi เขียน · แชต = Kimi · รอยต่อ = Kimi เสมอ**

ก่อนเขียนโค้ด ให้ Kimi ทำ **Phase 0** ครั้งเดียว:

1. ใครเป็นเจ้าของ data อะไร (ยอดเงินอยู่ที่ระบบการเงินเท่านั้น — ห้ามเก็บสำเนา)
2. คุยกันแบบไหน (หักเงิน = เรียกตรงรอผล / แจ้งแบน = ยิง event)
3. ล้มกลางทางแล้วทำยังไง (rollback / compensating transaction)

### 📊 Dashboard / Data Visualization

```
researcher    หาข้อมูลจากแหล่งข้อมูลจริง (Yahoo Finance, World Bank, IMF, กฎหมาย)
Kimi          วิเคราะห์ + ออกแบบ dashboard
Kimi + ipython สร้างกราฟ interactive (charts, tables, dashboards)
Kimi          สรุป insight + แนะนำ action
```

**ท่าสำคัญ:** ใช้ `get_data_source` ดึงข้อมูลจริงจากแหล่งข้อมูลมาตรฐาน → วิเคราะห์ด้วย `ipython` → แสดงผลด้วย `show_widget`

* * *

## 5. เรื่องที่คนเข้าใจผิดบ่อย

### "ทำ UI ให้สวย" — ความสวยไม่ได้อยู่ที่ Agent

```
เขียน UI → เปิดดูจริง → จับจุดไม่สวย → แก้ → ดูใหม่   (วนจนสวย)
```

Agent ที่ _เห็นผลลัพธ์_ แล้ววนแก้ 3 รอบ **ชนะ** Agent ที่เขียนรอบเดียวโดยไม่เคยเห็นหน้าจอ

เครื่องมือสำคัญกว่าอัปเกรด prompt:

- **ok-computer** — ออกแบบ visual, ไอคอน, โลโก้ ให้ premium
- **websites** — สร้าง UI จริงด้วย React/AntD แล้ว preview ได้
- **show_widget** — สร้าง interactive widget (charts, forms, calculators) แบบเห็นผลลัพธ์ทันที
- **ตัวอย่างอ้างอิง** — ลิงก์เว็บที่ชอบ 1 อัน มีค่ากว่าคำสั่ง "สวยๆ" ร้อยคำ

### วางโครงระบบ — จุดที่คุ้มค่าจ่ายแพงสุด

โครงผิด แก้ทีหลังแพงกว่าโค้ดผิด 100 เท่า → **Kimi (Default) เท่านั้น** และอย่าให้คิดรอบเดียวจบ:

```
เสนอ 2–3 แนวทาง → เทียบ trade-off กับข้อจำกัดจริง → เลือก + เขียนเหตุผลว่าทำไมไม่เลือกอันอื่น
```

⚠️ กำกับด้วย: _"ให้พอดีสเกลตอนนี้ ไม่ over-engineer"_ — AI ฉลาดชอบออกแบบเผื่ออนาคตเกินจริง

### researcher ใช้ตรงไหน

| ✅ ใช่ | ❌ ไม่ใช่ |
| --- | --- |
| ค้นหาข้อมูลล่าสุดจากอินเทอร์เน็ต | คิดวิเคราะห์เชิงลึก → ใช้ Kimi (Default) |
| ตรวจสอบข้อเท็จจริง, fact-checking | เขียนโค้ด → ใช้ Kimi (Default) หรือ websites |
| หา reference งานวิชาการ | ออกแบบระบบ → ใช้ Kimi (Default) |
| สำรวจเว็บไซต์, ดึงข้อมูลจากหลายแหล่ง | วิเคราะห์ข้อมูล → ใช้ Kimi (Default) + ipython |

**สูตร research:** บอก 4 อย่าง — หาอะไร / จากไหน / เอาไปทำอะไร / ต้องการลึกแค่ไหน

### ipython ใช้ตรงไหน

| ✅ ใช่ | ❌ ไม่ใช่ |
| --- | --- |
| วิเคราะห์ข้อมูล, สร้างกราฟ, charts | ค้นหาข้อมูลจากอินเทอร์เน็ต → ใช้ researcher |
| คำนวณซับซ้อน, สถิติ | เขียนโค้ด production → ใช้ Kimi (Default) |
| สร้างไฟล์ output (PNG, CSV, etc.) | ออกแบบ UI → ใช้ ok-computer |
| ประมวลผลข้อมูลจำนวนมาก | ค้นคว้าข้อมูล → ใช้ researcher |

**ท่าสำคัญ:** `ipython` ไม่มี network access — ดึงข้อมูลก่อนด้วย `get_data_source` หรือ `web_search` แล้วค่อยวิเคราะห์

### memory ใช้ตรงไหน

| ✅ ใช่ | ❌ ไม่ใช่ |
| --- | --- |
| บันทึก preference ที่ใช้ซ้ำ (เช่น "ชอบ dark mode", "ใช้ React + AntD") | บันทึกข้อมูลลับ / sensitive data |
| บันทึก context โปรเจกต์ระยะยาว | บันทึกข้อมูลส่วนตัวคนอื่น |
| ตั้ง reminder งานประจำ | บันทึกข้อมูลที่เปลี่ยนบ่อย |

**ท่าสำคัญ:** ใช้ `memory_instruction_edits` เพื่อบันทึกคำสั่งถาวร และ `add_cron_job` เพื่อตั้งเตือนความจำ

* * *

## 6. มุมมองซีเนียร์ — ตัดกฎทิ้งเกือบหมด

ตารางทั้งหมดข้างบนคือของมือใหม่ที่ต้องมีกฎกำกับ ซีเนียร์คิดแค่นี้:

```
default: Kimi (Default) ทุกอย่าง
  ↑ ขึ้น researcher   เมื่อต้องการข้อมูลล่าสุดจากอินเทอร์เน็ต
  ↑ ขึ้น ok-computer  เมื่อต้องการ visual ที่ premium / ออกแบบ
  ↑ ขึ้น websites     เมื่อต้องการสร้างเว็บจริงด้วย React/AntD
  ↓ ลง ipython        เมื่อต้องการวิเคราะห์ข้อมูล / สร้างกราฟ
```

| | มือใหม่ | ซีเนียร์ |
| --- | --- | --- |
| เริ่มงาน | เปิดตารางหาว่าใช้ตัวไหน | เปิด Kimi (Default) ลุยเลย |
| เจองานยาก | ลังเล ลองตัวเบาก่อน | ขึ้น Kimi (Default) ทันที ไม่เสียดาย |
| งานถึก | ใช้ Kimi (Default) เพราะเคยชิน | เด้งลง ipython / มอบให้ tool ทำ |
| สลับ Agent | บ่อย ตามฟีเจอร์ | นานๆ ที ตามสัญชาตญาณ |

กฎเดียวที่ซีเนียร์ไม่เคยยอมประหยัด: **"พลาดแล้วเจ็บ" = ใช้ตัวที่ดีที่สุด ไม่ต้องคิด**
(เงิน, auth, migration ลบข้อมูล, decision ที่แก้ทีหลังแพง)

ท่าจริงใน Kimi: ตัวหลักฉลาดคุมงาน → มอบงานถึกให้ tool ทำขนาน
เหมือนซีเนียร์จริงที่ไม่ลงมือ format code เอง

> **กฎทอง:** อย่าเลือก Agent ให้เยอะกว่าเลือกโค้ด
> เวลาที่เสียไปนั่งเลือก Agent เป๊ะๆ ทุกงาน แพงกว่าส่วนต่างที่ประหยัดได้

* * *

## 7. Tools & Skills สำคัญ

### 🔧 Tools ที่ควรรู้จัก

| Tool | ใช้ทำอะไร | เมื่อไหร่ |
| --- | --- | --- |
| `web_search` | ค้นหาข้อมูลจากอินเทอร์เน็ต | ต้องการข้อมูลล่าสุด |
| `web_open_url` | อ่านเนื้อหาเว็บเฉพาะ | มีลิงก์ที่ต้องการอ่าน |
| `search_image_by_text` | ค้นหารูปภาพ | ต้องการ visual reference |
| `search_image_by_image` | หารูปที่คล้ายกัน | มีรูปต้นฉบับ |
| `ipython` | วิเคราะห์ข้อมูล, สร้างกราฟ | ต้องการประมวลผลข้อมูล |
| `get_data_source` | ดึงข้อมูล finance/economy/law | ต้องการข้อมูล structured |
| `show_widget` | สร้าง interactive widget | ต้องการแสดงผล interactive |
| `memory_instruction_edits` | บันทึกคำสั่งถาวร | มี preference ที่ใช้ซ้ำ |
| `add_cron_job` | ตั้ง reminder | ต้องการเตือนความจำ |

### 🛠️ Skills ที่มีให้ใช้

- **kimi-help-center** — คู่มือการใช้งาน Kimi, subscription, ผลิตภัณฑ์ต่างๆ
- **kimi-widget** — คู่มือสร้าง widget แบบ interactive

* * *

## 8. ข้อจำกัดที่ต้องรู้

| ข้อจำกัด | รายละเอียด | วิธีรับมือ |
| --- | --- | --- |
| **25 steps ต่อ turn** | จำกัดการทำงานต่อรอบ | แบ่งงานเป็นชิ้นเล็กๆ |
| **ipython ไม่มี network** | ไม่สามารถดึงข้อมูลจากเน็ตได้ | ดึงข้อมูลก่อนด้วย web_search / get_data_source |
| **upload read-only** | `/mnt/agents/upload/` อ่านได้อย่างเดียว | ใช้ `/mnt/agents/output/` สำหรับเขียนไฟล์ |
| **memory สูงสุด 50 entries** | จำกัดจำนวนคำสั่งถาวร | ลบอันเก่าที่ไม่จำเป็น |
| **cron ขั้นต่ำ 1 ชั่วโมง** | reminder ถี่สุดได้ชั่วโมงละครั้ง | วางแผนการเตือนตามความเหมาะสม |

* * *

## เกร็ด

- **Widget = อาวุธลับ:** ใช้ `show_widget` เพื่อสร้าง interactive dashboard, form, calculator ที่ผู้ใช้สามารถโต้ตอบได้ทันที
- **Data Source = ความน่าเชื่อถือ:** ใช้ `get_data_source` ดึงข้อมูลจากแหล่งมาตรฐาน (Yahoo Finance, World Bank, IMF, กฎหมายไทย) แทนการเชื่อถือข้อมูลจาก web search อย่างเดียว
- **Memory = ประสิทธิภาพ:** บันทึก preference และ context ถาวร เพื่อไม่ต้องอธิบายซ้ำทุกครั้ง
- **Researcher = ความถูกต้อง:** ใช้ตรวจสอบ facts ก่อนตัดสินใจสำคัญ — อย่าเชื่อทุกอย่างที่ AI พูดโดยไม่ตรวจสอบ
