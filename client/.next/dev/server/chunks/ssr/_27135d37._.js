module.exports = [
"[project]/actions/user.actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f0289fe8b4ef790b13f52f6e55870d3ee7f7a75a8":"deleteUser","7f3a65ac450d2d4fab040a223f6e46dceaed576140":"createUser","7f7c842f09423bd3a1f492e58a2c40f34bd7867bdf":"getUsers","7fbe8c514cf71408b24e125c5b4ba392f0e11f94de":"updateUser","7fe17eb3df5ee9b88b5804413f273ea7fdfc6f0e79":"getUserDetails"},"",""] */ __turbopack_context__.s([
    "createUser",
    ()=>createUser,
    "deleteUser",
    ()=>deleteUser,
    "getUserDetails",
    ()=>getUserDetails,
    "getUsers",
    ()=>getUsers,
    "updateUser",
    ()=>updateUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
const getUsers = async ()=>{
    const data = await fetch(`${process.env.API_URL}/api/users`);
    const users = await data.json();
    return {
        users
    };
};
const createUser = async (formData)=>{
    const name = formData.get('name');
    const email = formData.get('email');
    const data = {
        name,
        email
    };
    const res = await fetch(`${process.env.API_URL}/api/users`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const user = await res.json();
    if (user) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/');
    }
};
const getUserDetails = async (id)=>{
    const res = await fetch(`${process.env.API_URL}/api/users/${id}`);
    const user = await res.json();
    return {
        user
    };
};
const deleteUser = async (id)=>{
    const res = await fetch(`${process.env.API_URL}/api/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    });
    const data = res.json();
    if (data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
    }
};
const updateUser = async (prevState, formData)=>{
    const id = formData.get('userId');
    const name = formData.get('name');
    const email = formData.get('email');
    const data = {
        name,
        email
    };
    const res = await fetch(`${process.env.API_URL}/api/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const user = await res.json();
    if (user) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/${id}/edit`);
        return {
            success: true,
            msg: 'User updated successfully'
        };
    }
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getUsers,
    createUser,
    getUserDetails,
    deleteUser,
    updateUser
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUsers, "7f7c842f09423bd3a1f492e58a2c40f34bd7867bdf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createUser, "7f3a65ac450d2d4fab040a223f6e46dceaed576140", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserDetails, "7fe17eb3df5ee9b88b5804413f273ea7fdfc6f0e79", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteUser, "7f0289fe8b4ef790b13f52f6e55870d3ee7f7a75a8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateUser, "7fbe8c514cf71408b24e125c5b4ba392f0e11f94de", null);
}),
"[project]/.next-internal/server/app/(root)/[id]/edit/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/user.actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$user$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/user.actions.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/(root)/[id]/edit/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/user.actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "7f0289fe8b4ef790b13f52f6e55870d3ee7f7a75a8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$user$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteUser"],
    "7f3a65ac450d2d4fab040a223f6e46dceaed576140",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$user$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createUser"],
    "7f7c842f09423bd3a1f492e58a2c40f34bd7867bdf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$user$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUsers"],
    "7fbe8c514cf71408b24e125c5b4ba392f0e11f94de",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$user$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateUser"],
    "7fe17eb3df5ee9b88b5804413f273ea7fdfc6f0e79",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$user$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserDetails"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f5b$id$5d2f$edit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$actions$2f$user$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(root)/[id]/edit/page/actions.js { ACTIONS_MODULE0 => "[project]/actions/user.actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$user$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/user.actions.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_27135d37._.js.map