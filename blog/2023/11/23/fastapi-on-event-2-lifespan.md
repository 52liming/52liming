---
slug: 17852805.html
title:  DeprecationWarning:on_event is deprecated, use lifespan event handlers instead.
tags: [python,fastapi]
---

fastapi 启动之前执行代码，旧版本使用的是```@app.on_event("startup")```，不过在已经不推荐使用
<!-- truncate -->
```python
@app.on_event("startup")
async def startup_db():
    create_all()
```
## 问题处理
通过 lifespan event配合contextlib实现。
修改后代码：
```
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("启动前执行")
    create_all()
    yield
    print("关闭后前执行")

app = FastAPI(lifespan=lifespan)
```