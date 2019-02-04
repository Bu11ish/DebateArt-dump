! function (u) {
    function t(t) {
        for (var e, n, o = t[0], r = t[1], i = t[2], a = 0, s = []; a < o.length; a++) n = o[a], f[n] && s.push(f[n][0]), f[n] = 0;
        for (e in r) Object.prototype.hasOwnProperty.call(r, e) && (u[e] = r[e]);
        for (d && d(t); s.length;) s.shift()();
        return l.push.apply(l, i || []), c()
    }

    function c() {
        for (var t, e = 0; e < l.length; e++) {
            for (var n = l[e], o = !0, r = 1; r < n.length; r++) {
                var i = n[r];
                0 !== f[i] && (o = !1)
            }
            o && (l.splice(e--, 1), t = a(a.s = n[0]))
        }
        return t
    }
    var n = {},
        f = {
            2: 0
        },
        l = [];

    function a(t) {
        if (n[t]) return n[t].exports;
        var e = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return u[t].call(e.exports, e, e.exports, a), e.l = !0, e.exports
    }
    a.m = u, a.c = n, a.d = function (t, e, n) {
        a.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, a.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, a.t = function (e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var o in e) a.d(n, o, function (t) {
                return e[t]
            }.bind(null, o));
        return n
    }, a.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return a.d(e, "a", e), e
    }, a.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, a.p = "";
    var e = window.webpackJsonp = window.webpackJsonp || [],
        o = e.push.bind(e);
    e.push = t, e = e.slice();
    for (var r = 0; r < e.length; r++) t(e[r]);
    var d = o;
    l.push([38, 0]), c()
}([, function (t, o, r) {
    "use strict";
    (function (s, u) {
        r.d(o, "a", function () {
            return t
        }), r.d(o, "b", function () {
            return n
        });
        var e = r(4),
            t = function () {
                function t(t) {
                    this.$form = t
                }
                return t.prototype.activateLoaders = function () {
                    this.$form.find("[data-has-loader='true']").each(function () {
                        e.a(u(this))
                    })
                }, t.prototype.deactivateLoaders = function () {
                    this.$form.find("[data-has-loader='true']").each(function () {
                        e.b(u(this))
                    })
                }, t.prototype.disableElements = function () {
                    this.$form.find("[data-disable-on-request='true']").prop("disabled", !0)
                }, t.prototype.enableElements = function () {
                    this.$form.find("[data-enable-on-response='true']").prop("disabled", !1)
                }, t.prototype.submit = function (t) {
                    (function (t) {
                        var e = this.$form,
                            n = this,
                            o = {
                                method: e.attr("method"),
                                url: e.attr("action"),
                                data: e.serialize(),
                                dataType: "json",
                                beforeSend: function () { },
                                error: function () { },
                                success: function () { },
                                complete: function () { }
                            },
                            r = (t = s.extend({}, o, t)).beforeSend,
                            i = t.complete,
                            a = t.error;
                        t.beforeSend = function (t, e) {
                            n.activateLoaders(), n.disableElements(), r(t, e)
                        }, t.complete = function (t, e) {
                            n.deactivateLoaders(), n.enableElements(), i(t, e)
                        }, t.error = function (t, e, n) {
                            if (302 === t.status) {
                                var o = JSON.parse(t.responseText);
                                !0 === o.keep_history ? window.location.href = o.redirect : window.location.replace(o.redirect)
                            } else a(t, e, n)
                        }, u.ajax(t)
                    }).call(this, t)
                }, t
            }();

        function n(e, n) {
            Object.keys(e).forEach(function (t) {
                n(t, e[t][0])
            })
        }
    }).call(this, r(0), r(0))
}, function (t, n, o) {
    "use strict";
    (function (u, c) {
        o.d(n, "a", function () {
            return t
        });
        var e = o(4),
            t = function () {
                function t(t) {
                    this.$link = t
                }
                return t.prototype.activateLoader = function () {
                    var t = this.$link;
                    "true" === t.attr("data-has-loader") && e.a(t)
                }, t.prototype.checkConfirmation = function () {
                    var t = this.$link.attr("data-confirm");
                    return !(t && !window.confirm(t))
                }, t.prototype.deactivateLoader = function () {
                    var t = this.$link;
                    "true" === t.attr("data-has-loader") && e.b(t)
                }, t.prototype.disableLink = function () {
                    var t = this.$link;
                    "true" === t.attr("data-disable-on-request") && t.prop("disabled", !0)
                }, t.prototype.enableLink = function () {
                    var t = this.$link;
                    "true" === t.attr("data-disable-on-request") && t.prop("disabled", !1)
                }, t.prototype.submit = function (t) {
                    (function (t) {
                        var e = this.$link,
                            n = this,
                            o = {
                                _method: e.attr("data-method"),
                                _csrf_token: e.attr("data-csrf")
                            },
                            r = {
                                method: "post",
                                url: e.attr("data-to"),
                                data: o,
                                dataType: "json",
                                beforeSend: function () { },
                                error: function () { },
                                success: function () { },
                                complete: function () { }
                            },
                            i = (t = u.extend({}, r, t)).beforeSend,
                            a = t.complete,
                            s = t.error;
                        t.beforeSend = function (t, e) {
                            n.checkConfirmation() ? (n.activateLoader(), n.disableLink(), i(t, e)) : t.abort()
                        }, t.complete = function (t, e) {
                            n.deactivateLoader(), n.enableLink(), a(t, e)
                        }, t.error = function (t, e, n) {
                            if (302 === t.status) {
                                var o = JSON.parse(t.responseText);
                                !0 === o.keep_history ? window.location.href = o.redirect : window.location.replace(o.redirect)
                            } else s(t, e, n)
                        }, c.ajax(t)
                    }).call(this, t)
                }, t
            }()
    }).call(this, o(0), o(0))
}, , function (t, e, n) {
    "use strict";

    function o(t) {
        t.data("original-content", t.html()).html("<div class='loader-inner ball-pulse'><div></div><div></div><div></div></div>")
    }

    function r(t) {
        t.html(t.data("original-content"))
    }
    n.d(e, "a", function () {
        return o
    }), n.d(e, "b", function () {
        return r
    })
}, function (t, o, r) {
    "use strict";
    (function (a) {
        function t() {
            return {
                delay: 300,
                minLength: 1,
                source: function (t, e) {
                    var n, o, r, i;
                    n = t.term, o = e, r = s(n), "" !== (i = r.slice(-1)[0]).trim() ? a.get("/api/profile_usernames", {
                        starts_with: i
                    }, function (t) {
                        var e = t.usernames.filter(function (t) {
                            return !r.slice(0, -1).includes(t)
                        });
                        o(e.slice(0, 7))
                    }, "json") : o([])
                },
                focus: function () {
                    return !1
                },
                select: function (t, e) {
                    return this.value = n(this.value, e.item.value), !1
                },
                open: function () {
                    a(this).addClass("input--with-suggestions")
                },
                close: function () {
                    a(this).removeClass("input--with-suggestions")
                },
                position: {
                    using: function (t) {
                        t.top = t.top - 1, a(this).css(t)
                    }
                }
            }
        }

        function n(t, e) {
            var n = s(t);
            return n.pop(), 0 === n.length ? e : (n.push(e), n.join(", "))
        }

        function e(t) {
            t.on("keydown", function (t) {
                t.keyCode === a.ui.keyCode.TAB && a(this).autocomplete("instance").menu.active && t.preventDefault()
            })
        }

        function s(t) {
            return t.split(/,\s*/)
        }
        r.d(o, "a", function () {
            return t
        }), r.d(o, "c", function () {
            return n
        }), r.d(o, "b", function () {
            return e
        })
    }).call(this, r(0))
}, , function (t, o, r) {
    "use strict";
    (function (e) {
        function t(t) {
            return e(e.parseHTML(e.trim(t))[0])
        }

        function n(t) {
            return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(t).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"))
        }
        r.d(o, "a", function () {
            return t
        }), r.d(o, "b", function () {
            return n
        })
    }).call(this, r(0))
}, , , , , function (t, u, c) {
    "use strict";
    (function (n) {
        c.d(u, "a", function () {
            return e
        }), c.d(u, "b", function () {
            return i
        }), c.d(u, "c", function () {
            return a
        });
        var s = c(28);

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }

        function t(t, e, n) {
            return e && r(t.prototype, e), n && r(t, n), t
        }
        var e = function () {
            function e(t) {
                o(this, e), this.file = t, this.extension = t.name.split(".").pop().toLowerCase()
            }
            return t(e, [{
                key: "validate",
                value: function (t) {
                    var e = [];
                    return this.validateFileSize(t.minSize, t.maxSize) || e.unshift("fileSize"), this.validateFileType(t.fileTypes) || e.unshift("fileType"), this.validateExtension(t.extensions) || e.unshift("fileExtension"), e
                }
            }, {
                key: "validateFileSize",
                value: function (t, e) {
                    return this.file.size >= t && this.file.size <= e
                }
            }, {
                key: "validateFileType",
                value: function (t) {
                    return -1 !== n.inArray(this.file.type, t)
                }
            }, {
                key: "validateExtension",
                value: function (t) {
                    return -1 !== n.inArray(this.extension, t)
                }
            }]), e
        }(),
            i = function () {
                function n(t) {
                    o(this, n);
                    var e = t.width / t.height;
                    this.image = t, this.imageRatio = parseFloat((Math.round(100 * e) / 100).toFixed(2))
                }
                return t(n, [{
                    key: "validate",
                    value: function (t) {
                        var e = [];
                        return this.validateWidth(t.minWidth, t.maxWidth) || e.unshift("imageWidth"), this.validateHeight(t.minHeight, t.maxHeight) || e.unshift("imageHeight"), this.validateRatio(t.minRatio, t.maxRatio) || e.unshift("imageRatio"), e
                    }
                }, {
                    key: "validateWidth",
                    value: function (t, e) {
                        return this.image.width >= t && this.image.width <= e
                    }
                }, {
                    key: "validateHeight",
                    value: function (t, e) {
                        return this.image.height >= t && this.image.height <= e
                    }
                }, {
                    key: "validateRatio",
                    value: function (t, e) {
                        return this.imageRatio >= t && this.imageRatio <= e
                    }
                }]), n
            }();

        function a(i, t) {
            var a = t[0],
                e = function (t) {
                    switch (a) {
                        case "fileSize":
                            return r = i, "Image weight must not be less than " + Object(s.a)(r.minSize) + " and more than " + Object(s.a)(r.maxSize);
                        case "fileType":
                        case "fileExtension":
                            return "Invalid file extension";
                        case "imageWidth":
                            return "Image width must not be less than " + (o = i).minWidth + " and more than " + o.maxWidth + " pixels";
                        case "imageHeight":
                            return "Image height must not be less than " + (n = i).minHeight + " and more than " + n.maxHeight + " pixels";
                        case "imageRatio":
                            return "Image ratio must not be less than " + (e = i).minRatio + " and more than " + e.maxRatio;
                        default:
                            return "Image processing has failed"
                    }
                    var e, n, o, r
                }();
            return alert(e)
        }
    }).call(this, c(0))
}, , , , , , , , , , , , , function (t, e, n) { }, , function (t, e, n) {
    "use strict";
    (function (o) {
        var t = n(3),
            r = n.n(t);
        o(function () {
            var t = o("#flash-info-message"),
                e = o("#flash-error-message"),
                n = o("#flash-success-message");
            r.a.logPosition("bottom right"), 0 < t.length && r.a.log(t.html().trim()), 0 < e.length && r.a.error(e.html().trim()), 0 < n.length && r.a.success(n.html().trim())
        })
    }).call(this, n(0))
}, function (t, e, n) {
    "use strict";

    function o(t) {
        if (Math.abs(t) < 1024) return t + " б";
        for (var e = ["KB", "MB", "GB", "TB"], n = -1; t /= 1024, ++n, 1024 <= Math.abs(t) && n < e.length - 1;);
        return t.toFixed(2) + " " + e[n]
    }
    n.d(e, "a", function () {
        return o
    })
}, , , , , , function (t, e, n) {
    "use strict";

    function o(t, e) {
        var n = Date.parse(e) - Date.parse(t),
            o = Math.floor(n / 1e3 % 60),
            r = Math.floor(n / 1e3 / 60 % 60),
            i = Math.floor(n / 36e5 % 24);
        return {
            total: n,
            days: Math.floor(n / 864e5),
            hours: i,
            minutes: r,
            seconds: o
        }
    }
    n.d(e, "a", function () {
        return o
    })
}, , , , function (t, e, n) {
    t.exports = n(140)
}, , , , , , , , , , , , , , , function (t, e, n) { }, , function (t, e, n) {
    (function (a) {
        function t(t) {
            t.$avatarImage.hide(), t.$avatarLoader.show()
        }

        function e(t) {
            t.$avatarImage.show(), t.$avatarLoader.hide()
        }
        a(function () {
            var i = {
                $dropdown: a(".main-header-dropdown")
            };
            if (0 === i.$dropdown.length) return null;
            i.$avatarLink = a(".main-header__profile-avatar-link"), i.$avatarLoader = a(".main-header__profile-avatar-loader"), i.$avatarImage = a(".main-header__profile-avatar-image"), i.$avatarLink.click(function (t) {
                var e, n;
                e = t, n = i.$dropdown, e.preventDefault(), n.toggleClass("main-header-dropdown--visible")
            }), a(document).click(function (t) {
                var e, n, o, r;
                e = t, n = i.$dropdown, o = 0 < a(e.target).closest(".main-header__profile-avatar-link").length, r = 0 < a(e.target).closest(".main-header-dropdown").length, o || r || n.removeClass("main-header-dropdown--visible")
            }), profilePubSub.subscribe("profile_avatar/upload-start", function () {
                t(i)
            }), profilePubSub.subscribe("profile_avatar/deletion-start", function () {
                t(i)
            }), profilePubSub.subscribe("profile_avatar/upload-stop", function () {
                e(i)
            }), profilePubSub.subscribe("profile_avatar/deletion-stop", function () {
                e(i)
            })
        })
    }).call(this, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        var i = n(1);
        t(function () {
            var e = {
                $form: t("#new-user-form")
            };
            if (0 === e.$form.length) return null;
            e.$formInputs = e.$form.find(".auth-box__form-field-input"), e.$form.submit(function (t) {
                var r;
                r = e, t.preventDefault(), new i.a(r.$form).submit({
                    error: function (t) {
                        if (400 === t.status) {
                            var e = JSON.parse(t.responseText).errors;
                            (o = r).$formInputs.filter(".auth-box__form-field-input--has-error").removeClass("auth-box__form-field-input--has-error"), o.$form.find(".auth-box__form-field-error").remove(), Object(i.b)(e, (n = r, function (t, e) {
                                n.$formInputs.filter(".input[name='user[" + t + "]']").addClass("auth-box__form-field-input--has-error").after("<div class='auth-box__form-field-error'>" + e + "</div>")
                            }))
                        } else alert("Something went wrong ...");
                        var n, o
                    }
                })
            })
        })
    }).call(this, n(0))
}, function (t, e, o) {
    "use strict";
    (function (t) {
        var n = o(1);
        t(function () {
            var e = t("#new-activation-letter-form");
            if (0 === e.length) return null;
            e.submit(function (t) {
                t.preventDefault(), new n.a(e).submit({
                    error: function () {
                        alert("Something went wrong ...")
                    }
                })
            })
        })
    }).call(this, o(0))
}, function (t, e, o) {
    "use strict";
    (function (t) {
        var n = o(1);
        t(function () {
            var e = t("#new-password-reset-letter-form");
            if (0 === e.length) return null;
            e.submit(function (t) {
                t.preventDefault(), new n.a(e).submit({
                    error: function () {
                        alert("Something went wrong ...")
                    }
                })
            })
        })
    }).call(this, o(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        var i = n(1);
        t(function () {
            var e = {
                $form: t("#password-reset-form")
            };
            if (0 === e.$form.length) return null;
            e.$formInputs = e.$form.find(".auth-box__form-field-input"), e.$form.submit(function (t) {
                var r;
                r = e, t.preventDefault(), new i.a(r.$form).submit({
                    error: function (t) {
                        if (400 === t.status) {
                            var e = JSON.parse(t.responseText).errors;
                            (o = r).$formInputs.filter(".auth-box__form-field-input--has-error").removeClass("auth-box__form-field-input--has-error"), o.$form.find(".auth-box__form-field-error").remove(), Object(i.b)(e, (n = r, function (t, e) {
                                n.$formInputs.filter(".input[name='user[" + t + "]']").addClass("auth-box__form-field-input--has-error").after("<div class='auth-box__form-field-error'>" + e + "</div>")
                            }))
                        } else alert("Something went wrong ...");
                        var n, o
                    }
                })
            })
        })
    }).call(this, n(0))
}, function (t, e, o) {
    "use strict";
    (function (l) {
        var n = o(1),
            d = "new-session-form-captcha";

        function m() {
            return l("#g-recaptcha-response")
        }
        l(function () {
            var e = {
                $form: l("#new-session-form")
            };
            if (0 === e.$form.length) return null;
            e.$authBox = l(".auth-box"), e.$passwordInput = e.$form.find("input[type='password']"), e.$captchaBlock = l("#" + d), e.$sitekeyMeta = l("meta[name='recaptcha-sitekey']"), e.$form.submit(function (t) {
                var f;
                f = e, t.preventDefault(), new n.a(f.$form).submit({
                    error: function (t) {
                        var e, n, o, r, i, a, s, u = JSON.parse(t.responseText).error_type,
                            c = JSON.parse(t.responseText).error_text;
                        switch (u) {
                            case "captcha_required":
                                r = f, m().val() ? (grecaptcha.reset(), r.$captchaBlock.show()) : grecaptcha.render(d, {
                                    sitekey: r.$sitekeyMeta.attr("content")
                                });
                                break;
                            case "invalid_captcha":
                                o = f, grecaptcha.reset(), o.$captchaBlock.show();
                                break;
                            default:
                                e = f, (n = m().val()) && "" !== n && (grecaptcha.reset(), e.$captchaBlock.hide())
                        }
                        "invalid_data" === u && (f.$passwordInput.val(""), a = c, 0 < (s = (i = f).$authBox.find(".auth-box__general-error")).length ? s.fadeTo(400, 0, function () {
                            l(this).fadeTo(400, 1)
                        }) : i.$form.before("<div class='auth-box__general-error'>" + a + "</div>"))
                    }
                })
            })
        })
    }).call(this, o(0))
}, function (t, e, o) {
    "use strict";
    (function (t) {
        var n = o(2);
        t(function () {
            var e = t("#main-header-dropdown__logout-link");
            if (0 === e.length) return null;
            e.click(function (t) {
                t.preventDefault(), new n.a(e).submit({})
            })
        })
    }).call(this, o(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        var i = n(1);
        t(function () {
            var e = {
                $form: t("#social-session-update-form")
            };
            if (0 === e.$form.length) return null;
            e.$formInputs = e.$form.find(".auth-box__form-field-input"), e.$form.submit(function (t) {
                var r;
                r = e, t.preventDefault(), new i.a(r.$form).submit({
                    error: function (t) {
                        if (400 === t.status) {
                            var e = JSON.parse(t.responseText).errors;
                            (o = r).$formInputs.filter(".auth-box__form-field-input--has-error").removeClass("auth-box__form-field-input--has-error"), o.$form.find(".auth-box__form-field-error").remove(), Object(i.b)(e, (n = r, function (t, e) {
                                n.$formInputs.filter(".input[name='user[" + t + "]']").addClass("auth-box__form-field-input--has-error").after("<div class='auth-box__form-field-error'>" + e + "</div>")
                            }))
                        } else alert("Something went wrong...");
                        var n, o
                    }
                })
            })
        })
    }).call(this, n(0))
}, function (t, e, o) {
    "use strict";
    (function (t) {
        var n = o(1);
        t(function () {
            var e = t(".notifications-list-edit__form");
            if (0 === e.length) return null;
            e.submit(function (t) {
                t.preventDefault(), new n.a(e).submit({
                    error: function (t) {
                        400 === t.status ? alert("Notification settings update failed. Most likely the form has been filled incorrectly") : alert("Something went wrong ...")
                    }
                })
            })
        })
    }).call(this, o(0))
}, function (t, e, o) {
    "use strict";
    (function (t) {
        var i = o(1);

        function n(t) {
            return t.$richEditorIframe[0].contentWindow.editor
        }
        t(function () {
            var e = {
                $form: t(".forum-topic-new__form")
            };
            if (0 === e.$form.length) return null;
            e.$postTextInput = t(".forum-topic-new__form-post-text-input"), e.$richEditor = t(".rich-editor"), e.$richEditorIframe = e.$richEditor.find("iframe"), e.$richEditorInput = e.$richEditor.find(".rich-editor__input"), e.$richEditorLabel = e.$richEditor.siblings(".forum-topic-new__form-label"), e.$richEditorLabel.click(function () {
                n(e).focus()
            }), e.$form.submit(function (t) {
                ! function (r, t) {
                    if (t.preventDefault(), !window.confirm("Are you sure?")) return;
                    r.$postTextInput.val(n(r).getHTML()), new i.a(r.$form).submit({
                        error: function (t) {
                            if (400 === t.status) {
                                var e = JSON.parse(t.responseText).errors;
                                (n = r).$form.find(".forum-topic-new__form-input-error").remove(), n.$form.find(".rich-editor__input--without-radius").removeClass("rich-editor__input--without-radius"), n.$form.find(".forum-topic-new__form-name-input--has-error").removeClass("forum-topic-new__form-name-input--has-error"), Object(i.b)(e, (o = r, function (t, e) {
                                    if ("forum_category_id" == t) return null;
                                    var n;
                                    "first_forum_post_text" === t ? (n = o.$richEditorInput).addClass("rich-editor__input--without-radius") : (n = o.$form.find(".forum-topic-new__form-name-input")).addClass("forum-topic-new__form-name-input--has-error"), n.after("<div class='forum-topic-new__form-input-error'>" + e + "</div>")
                                }))
                            } else alert("Something went wrong ...");
                            var o, n
                        }
                    })
                }(e, t)
            })
        })
    }).call(this, o(0))
}, function (t, e, o) {
    "use strict";
    (function (e) {
        var n = o(2);
        e(function () {
            e(".forum-topic-show").on("click", ".forum-topic-show__marking-button--delete", function (t) {
                if (t.preventDefault(), !window.confirm("Are you sure?")) return !1;
                new n.a(e(this)).submit()
            })
        })
    }).call(this, o(0))
}, function (t, e, n) {
    "use strict";
    (function (e) {
        var o = n(2);
        e(function () {
            e(".forum-topic-show").on("click", ".forum-topic-show__marking-button--favorite[href='#']", function (t) {
                t.preventDefault();
                var n = e(this);
                new o.a(n).submit({
                    success: function (t) {
                        n.attr("data-to", t.path), n.attr("data-method", t.method);
                        var e = n.find("i");
                        "delete" === t.type ? (n.attr("title", "Remove the topic from the favorites"), e.attr("class", "fa fa-star")) : (n.attr("title", "Add the topic to the favorites"), e.attr("class", "far fa-star"))
                    },
                    error: function () {
                        location.reload()
                    }
                })
            })
        })
    }).call(this, n(0))
}, function (t, e, n) {
    "use strict";
    (function (e) {
        var o = n(2);
        e(function () {
            e(".forum-topic-show").on("click", ".forum-topic-show__marking-button--pin", function (t) {
                t.preventDefault();
                var n = e(this);
                new o.a(n).submit({
                    success: function (t) {
                        n.attr("data-to", t.path), n.attr("data-method", t.method);
                        var e = n.find("i");
                        "unpin" === t.type ? (n.attr("title", "Unpin forum topic"), e.attr("class", "fas fa-map-marker")) : (n.attr("title", "Pin forum topic"), e.attr("class", "fas fa-map-marker-alt"))
                    },
                    error: function () {
                        location.reload()
                    }
                })
            })
        })
    }).call(this, n(0))
}, function (t, e, n) {
    "use strict";
    (function (e) {
        var o = n(2);
        e(function () {
            e(".forum-topic-show").on("click", ".forum-topic-show__marking-button--read-only", function (t) {
                t.preventDefault();
                var n = e(this);
                new o.a(n).submit({
                    success: function (t) {
                        n.attr("data-to", t.path), n.attr("data-method", t.method);
                        var e = n.find("i");
                        "unlock" === t.type ? (n.attr("title", "Unmark topic as read-only"), e.attr("class", "fa fa-eye-slash")) : (n.attr("title", "Mark topic as read-only"), e.attr("class", "fa fa-eye"))
                    },
                    error: function () {
                        location.reload()
                    }
                })
            })
        })
    }).call(this, n(0))
}, function (t, e, r) {
    "use strict";
    (function (n) {
        var i = r(1);

        function o(t) {
            return t.$richEditorIframe[0].contentWindow.editor
        }
        n(".forum-topic-edit__form .rich-editor iframe").on("load", function () {
            var e = {
                $richEditorIframe: n(this)
            };
            n(function () {
                e.$form = n(".forum-topic-edit__form"), e.$postTextInput = n(".forum-topic-edit__form-post-text-input"), e.$richEditor = n(".rich-editor"), e.$richEditorInput = e.$richEditor.find(".rich-editor__input"), e.$richEditorLabel = e.$richEditor.siblings(".forum-topic-edit__form-label");
                var t = n("#forum-topic-edit__content-script")[0];
                o(e).setHTML(t.innerHTML), t.outerHTML = "", e.$richEditorLabel.click(function () {
                    o(e).focus()
                }), e.$form.submit(function (t) {
                    ! function (r, t) {
                        if (t.preventDefault(), !window.confirm("Are you sure?")) return;
                        r.$postTextInput.val(o(r).getHTML()), new i.a(r.$form).submit({
                            error: function (t) {
                                if (400 === t.status) {
                                    var e = JSON.parse(t.responseText).errors;
                                    (n = r).$form.find(".forum-topic-edit__form-input-error").remove(), n.$form.find(".rich-editor__input--without-radius").removeClass("rich-editor__input--without-radius"), n.$form.find(".forum-topic-edit__form-name-input--has-error").removeClass("forum-topic-edit__form-name-input--has-error"), Object(i.b)(e, (o = r, function (t, e) {
                                        if ("forum_category_id" == t) return null;
                                        var n;
                                        "first_forum_post_text" === t ? (n = o.$richEditorInput).addClass("rich-editor__input--without-radius") : (n = o.$form.find(".forum-topic-edit__form-name-input")).addClass("forum-topic-edit__form-name-input--has-error"), n.after("<div class='forum-topic-edit__form-input-error'>" + e + "</div>")
                                    }))
                                } else alert("Something went wrong ...");
                                var o, n
                            }
                        })
                    }(e, t)
                })
            })
        })
    }).call(this, r(0))
}, function (t, e, o) {
    "use strict";
    (function (r, t) {
        var a = o(1),
            i = o(5);

        function n(t) {
            return t.$richEditorIframe[0].contentWindow.editor
        }
        r(function () {
            var e = {
                $form: r(".forum-topic-show__new-forum-post__form")
            };
            if (0 === e.$form.length) return null;
            e.$mainHeader = r(".main-header"), e.$newForumPost = r(".forum-topic-show__new-forum-post"), e.$textInput = r(".forum-topic-show__new-forum-post__form-text-input"), e.$richEditor = r(".rich-editor"), e.$richEditorIframe = e.$richEditor.find("iframe"), e.$richEditorInput = e.$richEditor.find(".rich-editor__input"), e.$richEditorLabel = e.$richEditor.siblings(".forum-topic-show__new-forum-post__form-label"), e.$receiversInput = e.$form.find(".forum-topic-show__new-forum-post__form-receivers-input"), e.$richEditorLabel.click(function () {
                n(e).focus()
            }), e.$form.submit(function (t) {
                ! function (i, t) {
                    if (t.preventDefault(), !window.confirm("Are you sure?")) return;
                    i.$textInput.val(n(i).getHTML()), new a.a(i.$form).submit({
                        error: function (t) {
                            if (400 === t.status) {
                                var e = JSON.parse(t.responseText).errors,
                                    n = (r = i, function (t, e) {
                                        var n;
                                        "text" === t ? (n = r.$richEditorInput).addClass("rich-editor__input--without-radius") : (n = r.$form.find(".forum-topic-show__new-forum-post__form-receivers-input")).addClass("forum-topic-show__new-forum-post__form-receivers-input--has-error"), n.after("<div class='forum-topic-show__new-forum-post__form-input-error'>" + e + "</div>")
                                    });
                                (o = i).$form.find(".forum-topic-show__new-forum-post__form-input-error").remove(), o.$form.find(".rich-editor__input--without-radius").removeClass("rich-editor__input--without-radius"), o.$form.find(".forum-topic-show__new-forum-post__form-receivers-input--has-error").removeClass("forum-topic-show__new-forum-post__form-receivers-input--has-error"), Object(a.b)(e, n)
                            } else alert("Something went wrong...");
                            var o, r
                        }
                    })
                }(e, t)
            }), Object(i.b)(e.$receiversInput), e.$receiversInput.autocomplete(t.extend({}, Object(i.a)(), {
                appendTo: ".forum-topic-show__new-forum-post__form"
            })), r("body").on("click", ".forum-topic-show__forum-post__reply-link", function (t) {
                ! function (t, e, n) {
                    n.preventDefault(), r("html, body").animate({
                        scrollTop: t.$newForumPost.offset().top - t.$mainHeader.height()
                    }, 500);
                    var o = e.closest(".forum-topic-show__forum-post").find(".forum-topic-show__forum-post__author-username-link").text();
                    t.$receiversInput.val(Object(i.c)(t.$receiversInput.val(), o)), t.$receiversInput.focus();
                    //bullish added
                    var quote = e.closest(".forum-topic-show__forum-post").find(".forum-topic-show__forum-post__text").html();
                    var regex = new RegExp("<blockquote>(.|[\r\n])*</blockquote>|<div>[\r\n]*<br>[\r\n]*</div>", "g"); //<blockquote>(.|[\r\n])*</blockquote>
                    quote = quote.replace(regex, "");
                    var iframe = document.getElementsByTagName("iframe")[0];
                    var doc = iframe.contentDocument;
                    doc.getElementsByTagName("div")[0].innerHTML = "<blockquote>" + quote + "</blockquote> <br>";
                    ///bullish added
                }(e, r(this), t)
            })
        })
    }).call(this, o(0), o(0))
}, function (t, e, r) {
    "use strict";
    (function (n) {
        var i = r(1);

        function o(t) {
            return t.$richEditorIframe[0].contentWindow.editor
        }
        n(".forum-post-edit__form .rich-editor iframe").on("load", function () {
            var e = {
                $richEditorIframe: n(this)
            };
            n(function () {
                e.$form = n(".forum-post-edit__form"), e.$postTextInput = n(".forum-post-edit__form-text-input"), e.$richEditor = n(".rich-editor"), e.$richEditorInput = e.$richEditor.find(".rich-editor__input"), e.$richEditorLabel = e.$richEditor.siblings(".forum-post-edit__form-label");
                var t = n("#forum-post-edit__content-script")[0];
                o(e).setHTML(t.innerHTML), t.outerHTML = "", e.$richEditorLabel.click(function () {
                    o(e).focus()
                }), e.$form.submit(function (t) {
                    ! function (r, t) {
                        if (t.preventDefault(), !window.confirm("Are you sure?")) return;
                        r.$postTextInput.val(o(r).getHTML()), new i.a(r.$form).submit({
                            error: function (t) {
                                if (400 === t.status) {
                                    var e = JSON.parse(t.responseText).errors;
                                    (o = r).$form.find(".forum-post-edit__form-input-error").remove(), o.$form.find(".rich-editor__input--without-radius").removeClass("rich-editor__input--without-radius"), Object(i.b)(e, (n = r, function (t, e) {
                                        n.$richEditorInput.addClass("rich-editor__input--without-radius"), n.$richEditorInput.after("<div class='forum-post-edit__form-input-error'>" + e + "</div>")
                                    }))
                                } else 422 === t.status ? alert(JSON.parse(t.responseText).error) : alert("Something went wrong ...");
                                var n, o
                            }
                        })
                    }(e, t)
                })
            })
        })
    }).call(this, r(0))
}, function (t, e, n) {
    "use strict";
    (function (o) {
        var r = n(7);
        o(function () {
            var t = {
                $forumTopicShow: o(".forum-topic-show")
            };
            if (0 === t.$forumTopicShow.length) return null;
            t.$mainHeader = o(".main-header");
            var e = Object(r.b)("post_number");
            if ("" !== e) {
                var n = t.$forumTopicShow.find(".forum-topic-show__forum-post[data-number = '" + e + "']");
                setTimeout(function () {
                    o("html, body").animate({
                        scrollTop: n.offset().top - t.$mainHeader.height()
                    }, 1e3)
                }, 300)
            }
        })
    }).call(this, n(0))
}, function (t, e, o) {
    "use strict";
    (function (e) {
        var n = o(2);
        e(function () {
            e(".forum-topic-show").on("click", ".forum-topic-show__forum-post__delete-button", function (t) {
                if (t.preventDefault(), !window.confirm("Are you sure?")) return !1;
                new n.a(e(this)).submit()
            })
        })
    }).call(this, o(0))
}, function (t, e, r) {
    "use strict";
    (function (n) {
        var o = r(2);
        n(function () {
            n(".forum-topic-show").on("click", ".forum-topic-show__forum-post__report-button", function (t) {
                t.preventDefault();
                var e = n(this);
                new o.a(e).submit({
                    success: function (t) {
                        e.attr("data-to", t.path), e.attr("data-method", t.method), "delete" === t.type ? (e.addClass("forum-topic-show__forum-post__report-button--highlighted"), e.attr("title", "Cancel post report")) : (e.removeClass("forum-topic-show__forum-post__report-button--highlighted"), e.attr("title", "Report post"))
                    },
                    error: function () {
                        location.reload()
                    }
                })
            })
        })
    }).call(this, r(0))
}, function (t, e, n) {
    "use strict";
    (function (o) {
        var r = n(2);
        o(function () {
            o(".forum-topic-show").on("click", ".forum-topic-show__forum-post__handle-reports-button:not(.forum-topic-show__forum-post__handle-reports-button--inactive)", function (t) {
                t.preventDefault();
                var e = o(this),
                    n = e.siblings(".forum-topic-show__forum-post__report-button");
                new r.a(e).submit({
                    success: function () {
                        e.attr("data-to", null), e.attr("data-method", null), e.attr("data-csrf", null), e.attr("data-confirm", null), e.attr("href", "#"), e.attr("title", "Reports have been handled"), e.addClass("forum-topic-show__forum-post__handle-reports-button--inactive"), n.remove()
                    },
                    error: function () {
                        location.reload()
                    }
                })
            }), o(".forum-topic-show").on("click", ".forum-topic-show__forum-post__handle-reports-button--inactive", function (t) {
                t.preventDefault()
            })
        })
    }).call(this, n(0))
}, function (t, e, o) {
    "use strict";
    (function (s) {
        var u = o(7),
            n = o(2);

        function c(t) {
            setTimeout(function () {
                t.$newActivities.removeClass("activity-index__activity--new")
            }, 500)
        }
        s(function () {
            var e = {
                $activityIndex: s(".activity-index")
            };
            if (0 === e.$activityIndex.length) return null;
            e.$activitiesBody = s(".activity-index__body"), e.$loadButton = s(".activity-index__load-button"), Object.defineProperty(e, "$newActivities", {
                get: function () {
                    return s(".activity-index__activity--new")
                }
            }), c(e), e.$loadButton.click(function (t) {
                var a;
                a = e, t.preventDefault(), new n.a(a.$loadButton).submit({
                    method: "GET",
                    url: a.$loadButton.attr("href"),
                    error: function () {
                        alert("Something went wrong...")
                    },
                    success: function (t) {
                        var e, n, o, r, i;
                        e = a, n = t, o = 0, r = parseInt(e.$activitiesBody.attr("data-batch-size")), Object.keys(n).forEach(function (t) {
                            o += n[t].list.length
                        }), o === r ? e.$loadButton.attr("href", function (t, e) {
                            return e.replace(/page=([^&]+)/, function (t, e) {
                                return "page=" + (parseInt(e) + 1)
                            })
                        }) : e.$loadButton.parent().remove(), i = t, Object.keys(i).sort().forEach(function (t) {
                            var e = i[t],
                                n = e.list,
                                o = e.date;
                            n.forEach(function (t) {
                                ! function t(e, n) {
                                    var o = s(".activity-index__group-date:contains('" + e + "')");
                                    if (0 < o.length) {
                                        var r = Object(u.a)(n),
                                            i = o.next(".activity-index__group-block");
                                        0 === i.find(".activity-index__activity[data-id='" + r.attr("data-id") + "']").length && i.append(r)
                                    } else s(".activity-index__activity:last").after("<div class='activity-index__group-date'>" + e + "</div>").next().after("<div class='activity-index__group-block'></div>"), t(e, n)
                                }(o, t)
                            })
                        }), c(a)
                    }
                })
            })
        })
    }).call(this, o(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        var o = n(2);
        t(function () {
            var n = {
                $button: t("#activity-index__deletion-button")
            };
            if (0 === n.$button.length) return null;
            n.$button.click(function (t) {
                var e;
                e = n, t.preventDefault(), new o.a(e.$button).submit({
                    error: function () {
                        alert("Something went wrong...")
                    }
                })
            })
        })
    }).call(this, n(0))
}, function (t, e, n) {
    "use strict";
    (function (r) {
        var i = n(2);
        r(function () {
            var o = {
                getFavorite: function (t) {
                    return r(".office-favorite-index__table tr[data-id='" + t + "']")
                },
                getAllFavorites: function () {
                    return r(".office-favorite-index__table tr[data-id]")
                }
            };
            r("body").on("click", ".office-favorite-index__table-delete-button", function (t) {
                var e, n;
                e = o, n = r(this), t.preventDefault(), new i.a(n).submit({
                    error: function () {
                        location.reload()
                    },
                    success: function (t) {
                        1 === e.getAllFavorites().length ? location.reload() : e.getFavorite(t.id).remove()
                    }
                })
            })
        })
    }).call(this, n(0))
}, function (t, e, o) {
    "use strict";
    (function (t) {
        var n = o(1);
        t(function () {
            var e = t(".profile-edit__form");
            if (0 === e.length) return null;
            e.submit(function (t) {
                t.preventDefault(), new n.a(e).submit({
                    error: function (t) {
                        400 === t.status ? alert("Profile update has failed. Most likely the form is not filled in correctly") : alert("Something went wrong...")
                    }
                })
            })
        })
    }).call(this, o(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        var u = n(12),
            o = n(1),
            c = {
                extensions: ["jpg", "jpeg", "png"],
                fileTypes: ["image/jpeg", "image/png"],
                minSize: 5120,
                maxSize: 5242880,
                minWidth: 140,
                maxWidth: 3e3,
                minHeight: 140,
                maxHeight: 3e3,
                minRatio: .5,
                maxRatio: 2
            };

        function f(t) {
            t.val("")
        }
        t(function () {
            var n = {
                $form: t(".profile-avatar-edit__avatar-update-form")
            };
            if (0 === n.$form.length) return null;
            n.$fileInput = n.$form.find("input[type='file']"), n.$form.submit(function (t) {
                var e;
                e = n, t.preventDefault(), new o.a(e.$form).submit({
                    data: new FormData(e.$form[0]),
                    processData: !1,
                    contentType: !1,
                    beforeSend: function () {
                        profilePubSub.publish("profile_avatar/upload-start")
                    },
                    error: function (t) {
                        profilePubSub.publish("profile_avatar/upload-stop"), 400 === t.status ? alert(JSON.parse(t.responseText).error.text) : alert("Something went wrong...")
                    }
                })
            }), n.$fileInput.change(function () {
                ! function (e) {
                    var t = e.$fileInput[0].files[0],
                        n = (o = t, new u.a(o).validate(c));
                    var o;
                    if (0 === n.length) {
                        r = t, i = function () {
                            e.$form.submit()
                        }, a = function (t) {
                            f(e.$fileInput), Object(u.c)(c, t)
                        }, (s = new Image).onload = function () {
                            var t = new u.b(s),
                                e = t.validate(c);
                            0 === e.length ? i() : a(e)
                        }, s.src = URL.createObjectURL(r)
                    } else f(e.$fileInput), Object(u.c)(c, n);
                    var r, i, a, s
                }(n)
            })
        })
    }).call(this, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        var o = n(2);
        t(function () {
            var e = t(".profile-avatar-edit__avatar-delete-button");
            if (0 === e.length) return null;

            function n(t) {
                return alert(t)
            }
            e.click(function (t) {
                t.preventDefault(), new o.a(e).submit({
                    beforeSend: function () {
                        profilePubSub.publish("profile_avatar/deletion-start")
                    },
                    error: function (t) {
                        profilePubSub.publish("profile_avatar/deletion-stop"), 400 === t.status ? n(JSON.parse(t.responseText).error.text) : n("Something went wrong...")
                    }
                })
            })
        })
    }).call(this, n(0))
}, function (t, e, n) {
    (function (e) {
        function n(t) {
            t.$avatarImage.hide(), t.$avatarLoader.show()
        }

        function o(t) {
            t.$avatarImage.show(), t.$avatarLoader.hide()
        }
        e(function () {
            var t = {
                $avatarLoader: e(".profile-avatar-edit__avatar-loader"),
                $avatarImage: e(".profile-avatar-edit__avatar-image")
            };
            if (0 === t.$avatarLoader.length || 0 === t.$avatarImage.length) return null;
            profilePubSub.subscribe("profile_avatar/upload-start", function () {
                n(t)
            }), profilePubSub.subscribe("profile_avatar/deletion-start", function () {
                n(t)
            }), profilePubSub.subscribe("profile_avatar/upload-stop", function () {
                o(t)
            }), profilePubSub.subscribe("profile_avatar/deletion-stop", function () {
                o(t)
            })
        })
    }).call(this, n(0))
}, function (t, e, o) {
    "use strict";
    (function (e) {
        var n = o(2);
        e(function () {
            e(".participant-show").on("click", ".participant-show__action-button--ban", function (t) {
                t.preventDefault(), new n.a(e(this)).submit({
                    error: function () {
                        location.reload()
                    }
                })
            })
        })
    }).call(this, o(0))
}, function (t, e, o) {
    "use strict";
    (function (e) {
        var n = o(2);
        e(function () {
            e(".participant-show").on("click", ".participant-show__action-button--block", function (t) {
                t.preventDefault();
                var o = e(this);
                new n.a(o).submit({
                    success: function (t) {
                        o.attr("data-to", t.path), o.attr("data-method", t.method);
                        var e = o.find("i"),
                            n = o.find("span");
                        "delete" === t.type ? (e.attr("class", "fa fa-lock-open"), n.text("Unblock user")) : (e.attr("class", "fa fa-lock"), n.text("Block user"))
                    },
                    error: function () {
                        location.reload()
                    }
                })
            })
        })
    }).call(this, o(0))
}, function (t, e, o) {
    "use strict";
    (function (e) {
        var n = o(2);
        e(function () {
            e(".participant-show").on("click", ".participant-show__action-button--favorite[href='#']", function (t) {
                t.preventDefault();
                var o = e(this);
                new n.a(o).submit({
                    success: function (t) {
                        o.attr("data-to", t.path), o.attr("data-method", t.method);
                        var e = o.find("i"),
                            n = o.find("span");
                        "delete" === t.type ? (e.attr("class", "fa fa-star"), n.text("Remove from favorites")) : (e.attr("class", "far fa-star"), n.text("Add to favorites"))
                    },
                    error: function () {
                        location.reload()
                    }
                })
            })
        })
    }).call(this, o(0))
}, function (t, e, o) {
    "use strict";
    (function (e) {
        var n = o(2);
        e(function () {
            e(".participant-show").on("click", ".participant-show__action-button--add-friend, .participant-show__action-button--accept-friend, .participant-show__action-button--reject-friend, .participant-show__action-button--cancel-friend, .participant-show__action-button--remove-friend", function (t) {
                t.preventDefault(), window.confirm("Are you sure?") && new n.a(e(this)).submit({
                    error: function () {
                        location.reload()
                    }
                })
            })
        })
    }).call(this, o(0))
}, function (t, e, n) {
    (function (t) {
        t(function () {
            t(".participant-show__debates-list-settings").on("change", ".participant-show__debates-list-settings-selector", function () {
                t(this).closest("form").submit()
            })
        })
    }).call(this, n(0))
}, function (t, e, n) {
    (function (t) {
        t(function () {
            t(".participant-show__debate-comments-list-settings").on("change", ".participant-show__debate-comments-list-settings-selector", function () {
                t(this).closest("form").submit()
            })
        })
    }).call(this, n(0))
}, function (t, e, n) {
    (function (t) {
        t(function () {
            t(".participant-show__forum-topics-list-settings").on("change", ".participant-show__forum-topics-list-settings-selector", function () {
                t(this).closest("form").submit()
            })
        })
    }).call(this, n(0))
}, function (t, e, n) {
    (function (e) {
        function n(t) {
            t.$avatarImage.hide(), t.$avatarLoader.show()
        }

        function o(t) {
            t.$avatarImage.show(), t.$avatarLoader.hide()
        }
        e(function () {
            var t = {
                $avatarLoader: e(".office-sidebar__profile-avatar-loader"),
                $avatarImage: e(".office-sidebar__profile-avatar-image")
            };
            if (0 === t.$avatarImage.length || 0 === t.$avatarLoader.length) return null;
            profilePubSub.subscribe("profile_avatar/upload-start", function () {
                n(t)
            }), profilePubSub.subscribe("profile_avatar/deletion-start", function () {
                n(t)
            }), profilePubSub.subscribe("profile_avatar/upload-stop", function () {
                o(t)
            }), profilePubSub.subscribe("profile_avatar/deletion-stop", function () {
                o(t)
            })
        })
    }).call(this, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        var i = n(1);
        t(function () {
            var e = {
                $form: t(".account-edit__form")
            };
            if (0 === e.$form.length) return null;
            e.$formInputs = e.$form.find(".account-edit__form-input"), e.$form.submit(function (t) {
                var r;
                r = e, t.preventDefault(), new i.a(r.$form).submit({
                    error: function (t) {
                        if (400 === t.status) {
                            var e = JSON.parse(t.responseText).errors;
                            (o = r).$formInputs.filter(".account-edit__form-input--has-error").removeClass("account-edit__form-input--has-error"), o.$form.find(".account-edit__form-error").remove(), Object(i.b)(e, (n = r, function (t, e) {
                                n.$formInputs.filter(".account-edit__form-input[name='account[" + t + "]']").addClass("account-edit__form-input--has-error").after("<div class='account-edit__form-error'>" + e + "</div>")
                            }))
                        } else alert("Something went wrong...");
                        var n, o
                    }
                })
            })
        })
    }).call(this, n(0))
}, function (t, e, n) {
    "use strict";
    (function (e) {
        var r = n(1),
            t = n(3),
            i = n.n(t);

        function a(t) {
            t.$formInputs.filter(".conversation-new__form-field-input--has-error").removeClass("conversation-new__form-field-input--has-error"), t.$form.find(".conversation-new__form-field-error").remove()
        }
        e(function () {
            var n = {
                $newConversationModal: e(".conversation-new")
            };
            if (0 == n.$newConversationModal.length) return !1;
            n.$form = n.$newConversationModal.find(".conversation-new__form"), n.$formInputs = n.$form.find(".conversation-new__form-field-input"), n.$receiverInput = n.$form.find(".conversation-new__form-field-input[name='conversation[receiver]']"), n.$textInput = n.$form.find(".conversation-new__form-field-input[name='conversation[text]']"), n.$form.submit(function (t) {
                var o;
                o = n, t.preventDefault(), new r.a(o.$form).submit({
                    error: function (t) {
                        if (400 === t.status) {
                            var e = JSON.parse(t.responseText).errors;
                            a(o), Object(r.b)(e, (n = o, function (t, e) {
                                n.$form.find(".conversation-new__form-field-input[name='conversation[" + t + "]']").addClass("conversation-new__form-field-input--has-error").after("<div class='conversation-new__form-field-error'>" + e + "</div>")
                            }))
                        } else alert("Something went wrong...");
                        var n
                    },
                    success: function () {
                        var t;
                        "true" === o.$clickedTrigger.attr("data-refresh-on-success") ? location.reload() : (e.modal.close(), (t = o).$form.find(".conversation-new__form-field-input").val(""), a(t), i.a.success("The dialogue has been successfully updated."))
                    }
                })
            }), e("body").on("click", "a[data-new-conversation-trigger]", function (t) {
                n.$clickedTrigger = e(this),
                    function (t, e) {
                        e.preventDefault();
                        var n = t.$clickedTrigger.attr("data-conversation-interlocutor");
                        n && t.$form.find(".conversation-new__form-field-input[name='conversation[receiver]']").val(n);
                        o = t, o.$newConversationModal.modal({
                            bodyScroll: !0,
                            fadeDuration: 250
                        });
                        var o
                    }(n, t)
            }), e("body").on(e.modal.OPEN, function (t) {
                var e;
                "" !== (e = n).$receiverInput.val() ? e.$textInput.focus() : e.$receiverInput.focus()
            })
        })
    }).call(this, n(0))
}, , function (t, e, n) {
    (function (t) {
        t(function () {
            t(".debate-index__list-settings").on("change", ".debate-index__list-settings-selector", function () {
                t(this).closest("form").submit()
            })
        })
    }).call(this, n(0))
}, function (t, e, r) {
    "use strict";
    (function (a, t) {
        var s = r(1),
            n = r(5),
            o = r(18);
        a(function () {
            var e = {
                $form: a(".debate-new__form")
            };
            if (0 === e.$form.length) return null;
            e.$mainHeader = a(".main-header"), e.$newDebate = a(".debate-new"), e.$votingSystemSelect = e.$form.find(".debate-new__form-select--voting-system"), e.$judgesUsernamesRow = e.$form.find(".debate-new__form-text-input--judges").closest(".debate-new__form-row"), e.$usernameFields = e.$form.find(".debate-new__form-text-input--username"), e.$votingSystemSelect.change(function () {
                var t;
                "judges" === (t = e).$votingSystemSelect.val() ? t.$judgesUsernamesRow.removeClass("debate-new__form-row--hidden") : t.$judgesUsernamesRow.addClass("debate-new__form-row--hidden")
            }), e.$form.submit(function (t) {
                var i;
                i = e, t.preventDefault(), new s.a(i.$form).submit({
                    error: function (t) {
                        if (400 === t.status) {
                            var e = JSON.parse(t.responseText).errors;
                            (r = i).$form.find(".debate-new__form-input-error").remove(), r.$form.find(".debate-new__form-row--with-error").removeClass("debate-new__form-row--with-error"), Object(s.b)(e, (o = i, function (t, e) {
                                var n = o.$form.find("[name='debate[" + t + "]']").closest(".debate-new__form-input-block");
                                n.append("<div class='debate-new__form-input-error'>" + e + "</div>"), n.closest(".debate-new__form-row").addClass("debate-new__form-row--with-error")
                            })), n = i, a("html, body").animate({
                                scrollTop: n.$newDebate.offset().top - n.$mainHeader.height()
                            }, 500)
                        } else alert("Something went wrong...");
                        var n, o, r
                    }
                })
            }), Object(o.a)(".debate-new__form-label", {
                delay: [300, 0],
                animation: "scale"
            }), e.$usernameFields.autocomplete(t.extend({}, Object(n.a)(), {
                appendTo: ".debate-new__form"
            }))
        })
    }).call(this, r(0), r(0))
}, function (t, e, r) {
    "use strict";
    (function (a, t) {
        var s = r(1),
            n = r(5),
            o = r(18);
        a(function () {
            var e = {
                $form: a(".debate-edit__form")
            };
            if (0 === e.$form.length) return null;
            e.$mainHeader = a(".main-header"), e.$debateEdit = a(".debate-edit"), e.$votingSystemSelect = e.$form.find(".debate-edit__form-select--voting-system"), e.$judgesUsernamesRow = e.$form.find(".debate-edit__form-text-input--judges").closest(".debate-edit__form-row"), e.$usernameFields = e.$form.find(".debate-edit__form-text-input--username"), e.$votingSystemSelect.change(function () {
                var t;
                "judges" === (t = e).$votingSystemSelect.val() ? t.$judgesUsernamesRow.removeClass("debate-edit__form-row--hidden") : t.$judgesUsernamesRow.addClass("debate-edit__form-row--hidden")
            }), e.$form.submit(function (t) {
                var i;
                i = e, t.preventDefault(), new s.a(i.$form).submit({
                    error: function (t) {
                        if (400 === t.status) {
                            var e = JSON.parse(t.responseText).errors;
                            (r = i).$form.find(".debate-edit__form-input-error").remove(), r.$form.find(".debate-edit__form-row--with-error").removeClass("debate-edit__form-row--with-error"), Object(s.b)(e, (o = i, function (t, e) {
                                var n = o.$form.find("[name='debate[" + t + "]']").closest(".debate-edit__form-input-block");
                                n.append("<div class='debate-edit__form-input-error'>" + e + "</div>"), n.closest(".debate-edit__form-row").addClass("debate-edit__form-row--with-error")
                            })), n = i, a("html, body").animate({
                                scrollTop: n.$debateEdit.offset().top - n.$mainHeader.height()
                            }, 500)
                        } else alert("Something went wrong...");
                        var n, o, r
                    }
                })
            }), Object(o.a)(".debate-edit__form-label", {
                delay: [300, 0],
                animation: "scale"
            }), e.$usernameFields.autocomplete(t.extend({}, Object(n.a)(), {
                appendTo: ".debate-edit__form"
            }))
        })
    }).call(this, r(0), r(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        var o = n(2);
        t(function () {
            var n = {
                $saveButton: t(".debate-preview__action-button--save")
            };
            if (0 === n.$saveButton.length) return null;
            n.$saveButton.click(function (t) {
                var e;
                e = n, t.preventDefault(), new o.a(e.$saveButton).submit({
                    error: function () {
                        alert("Something went wrong...")
                    }
                })
            })
        })
    }).call(this, n(0))
}, function (t, e, n) {
    "use strict";
    (function (r) {
        var i = n(34);
        r(function () {
            var e = {
                $countdown: r(".debate-show__countdown")
            };
            if (0 < e.$countdown.length) {
                var t = function () {
                    var t = Object(i.a)((new Date).toISOString(), n);
                    100 <= t.days ? e.$daysSpan.html(t.days.toString()) : e.$daysSpan.html(("0" + t.days).slice(-2)), e.$hoursSpan.html(("0" + t.hours).slice(-2)), e.$minutesSpan.html(("0" + t.minutes).slice(-2)), e.$secondsSpan.html(("0" + t.seconds).slice(-2)), t.total <= 0 && (clearInterval(o), e.$countdown.html("Countdown is over"), setTimeout(function () {
                        location.reload()
                    }, 1e3))
                };
                e.$daysSpan = e.$countdown.children(".debate-show__countdown-days"), e.$hoursSpan = e.$countdown.children(".debate-show__countdown-hours"), e.$minutesSpan = e.$countdown.children(".debate-show__countdown-minutes"), e.$secondsSpan = e.$countdown.children(".debate-show__countdown-seconds");
                var n = e.$countdown.attr("data-end-date");
                e.$countdown.removeClass("debate-show__countdown--hidden"), t();
                var o = setInterval(t, 1e3)
            }
        })
    }).call(this, n(0))
}, function (t, e, n) {
    (function (n) {
        function o(t, e) {
            var n = t.$tabs.find(".debate-show__tab[data-tab='" + e + "']"),
                o = n.index(".debate-show__tab");
            t.$tabs.find(".debate-show__tab").removeClass("debate-show__tab--active debate-show__tab--preactive"), t.$tabs.find(".debate-show__tab-content").removeClass("debate-show__tab-content--active"), n.addClass("debate-show__tab--active"), n.prev().addClass("debate-show__tab--preactive"), t.$tabs.find(".debate-show__tab-content").eq(o).addClass("debate-show__tab-content--active")
        }
        n(function () {
            var e = {
                $tabs: n(".debate-show__tabs"),
                $mainHeader: n(".main-header")
            };
            if (0 === e.$tabs.length) return !1;
            n("body").on("click", ".debate-show__tab-link", function (t) {
                t.preventDefault(), o(e, n(this).parent().attr("data-tab"))
            }), profilePubSub.subscribe("debate-show/voting-button-clicked", function () {
                o(e, "votes"), n("html, body").animate({
                    scrollTop: e.$tabs.offset().top - e.$mainHeader.height()
                }, 500)
            })
        })
    }).call(this, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t, e) {
        var i = n(1),
            o = n(5);
        t(function () {
            var n = {
                $newCommentBlock: t(".debate-show__new-comment")
            };
            if (0 === n.$newCommentBlock.length) return null;
            n.$invitationBlock = n.$newCommentBlock.find(".debate-show__tab-invitation-block"), n.$creationBlock = n.$newCommentBlock.find(".debate-show__new-comment__creation-block"), n.$invitationButton = n.$newCommentBlock.find(".debate-show__tab-invitation-button"), n.$form = n.$newCommentBlock.find(".debate-show__new-comment__form"), n.$formHideButton = n.$form.find(".debate-show__new-comment__hide-button"), n.$receiversInput = n.$form.find(".debate-show__new-comment__form-receivers-input"), n.$invitationButton.click(function (t) {
                var e;
                e = n, t.preventDefault(), e.$invitationBlock.removeClass("debate-show__tab-action-block--active"), e.$creationBlock.addClass("debate-show__tab-action-block--active"), e.$receiversInput.focus()
            }), n.$formHideButton.click(function (t) {
                var e;
                e = n, t.preventDefault(), e.$invitationBlock.addClass("debate-show__tab-action-block--active"), e.$creationBlock.removeClass("debate-show__tab-action-block--active")
            }), n.$form.submit(function (t) {
                var r;
                r = n, t.preventDefault(), new i.a(r.$form).submit({
                    error: function (t) {
                        if (400 === t.status) {
                            var e = JSON.parse(t.responseText).errors;
                            (o = r).$form.find(".debate-show__new-comment__form-input-error").remove(), o.$form.find(".debate-show__new-comment__form-input--has-error").removeClass("debate-show__new-comment__form-input--has-error"), Object(i.b)(e, (n = r, function (t, e) {
                                n.$form.find(".debate-show__new-comment__form-input[name='debate_comment[" + t + "]']").addClass("debate-show__new-comment__form-input--has-error").after("<div class='debate-show__new-comment__form-input-error'>" + e + "</div>")
                            }))
                        } else alert("Something went wrong...");
                        var n, o
                    }
                })
            }), Object(o.b)(n.$receiversInput), n.$receiversInput.autocomplete(e.extend({}, Object(o.a)(), {
                appendTo: ".debate-show__new-comment__form"
            }))
        })
    }).call(this, n(0), n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        var i = n(1);
        t(function () {
            var n = {
                $newVoteBlock: t(".debate-show__new-vote")
            };
            if (0 === n.$newVoteBlock.length) return !1;
            n.$invitationBlock = n.$newVoteBlock.find(".debate-show__tab-invitation-block"), n.$creationBlock = n.$newVoteBlock.find(".debate-show__new-vote__creation-block"), n.$invitationButton = n.$newVoteBlock.find(".debate-show__tab-invitation-button"), n.$form = n.$newVoteBlock.find(".debate-show__new-vote__form"), n.$invitationButton.click(function (t) {
                var e;
                e = n, t.preventDefault(), e.$invitationBlock.removeClass("debate-show__tab-action-block--active"), e.$creationBlock.addClass("debate-show__tab-action-block--active")
            }), n.$form.submit(function (t) {
                var r;
                r = n, t.preventDefault(), new i.a(r.$form).submit({
                    error: function (t) {
                        if (400 === t.status) {
                            var e = JSON.parse(t.responseText).errors;
                            (o = r).$form.find(".debate-show__new-vote__form-input-error").remove(), o.$form.find(".debate-show__new-vote__form-input--has-error").removeClass("debate-show__new-vote__form-input--has-error"), Object(i.b)(e, (n = r, function (t, e) {
                                n.$form.find(".debate-show__new-vote__form-input[name='debate_vote[" + t + "]']").addClass("debate-show__new-vote__form-input--has-error").after("<div class='debate-show__new-vote__form-input-error'>" + e + "</div>")
                            }))
                        } else alert("Something went wrong...");
                        var n, o
                    }
                })
            })
        })
    }).call(this, n(0))
}, function (t, e, n) {
    "use strict";
    (function (o) {
        var e = n(1);

        function i(t) {
            return t.closest(".debate-show__debate-comment")
        }

        function a(t) {
            t.find(".debate-show__edit-comment-form").hide(), t.find(".debate-show__debate-comment__body-content").show()
        }
        o(function () {
            var t = {
                $editButtons: o(".debate-show__debate-comment__edit-button")
            };
            if (0 === t.$editButtons.length) return null;
            t.$forms = o(".debate-show__edit-comment-form"), t.$hideFormButtons = o(".debate-show__edit-comment-form__hide-button"), t.$editButtons.click(function (t) {
                var e, n;
                e = o(this), t.preventDefault(), (n = i(e)).find(".debate-show__edit-comment-form").toggle(), n.find(".debate-show__debate-comment__body-content").toggle()
            }), t.$hideFormButtons.click(function (t) {
                var e;
                e = o(this), t.preventDefault(), a(i(e))
            }), t.$forms.submit(function (t) {
                var r;
                r = o(this), t.preventDefault(), new e.a(r).submit({
                    error: function (t) {
                        422 === t.status ? alert(JSON.parse(t.responseText).error) : alert("Something went wrong...")
                    },
                    success: function (t) {
                        var e, n, o = i(r);
                        e = o, n = t.debate_comment.text, e.find(".debate-show__debate-comment__text-wrap").html(n), a(o)
                    }
                })
            })
        })
    }).call(this, n(0))
}, function (t, e, o) {
    "use strict";
    (function (e) {
        var n = o(2);
        e(function () {
            var t = {
                $actionButtons: e(".debate-show__action-button[data-method]"),
                $votingButton: e("#debate-show__voting-action-button")
            };
            t.$actionButtons.click(function (t) {
                t.preventDefault(), new n.a(e(this)).submit({
                    error: function () {
                        alert("Something went wrong...")
                    }
                })
            }), t.$votingButton.click(function (t) {
                t.preventDefault(), profilePubSub.publish("debate-show/voting-button-clicked")
            })
        })
    }).call(this, o(0))
}, function (t, e, o) {
    "use strict";
    (function (e) {
        var n = o(2);
        e(function () {
            e(".debate-show").on("click", ".debate-show__debate-comment__like-button[href='#']", function (t) {
                t.preventDefault();
                var o = e(this);
                new n.a(o).submit({
                    success: function (t) {
                        o.attr("data-to", t.path), o.attr("data-method", t.method);
                        var e = o.find("i"),
                            n = o.find("span");
                        e.toggleClass("far"), e.toggleClass("fas"), "delete" === t.type ? n.text(parseInt(n.text(), 10) + 1) : n.text(parseInt(n.text(), 10) - 1)
                    },
                    error: function () {
                        location.reload()
                    }
                })
            })
        })
    }).call(this, o(0))
}, function (t, e, n) {
    "use strict";
    (function (o) {
        var r = n(2);
        o(function () {
            o(".debate-show").on("click", ".debate-show__debate-comment__handle-reports-button:not(.debate-show__debate-comment__handle-reports-button--inactive)", function (t) {
                t.preventDefault();
                var e = o(this),
                    n = e.siblings(".debate-show__debate-comment__report-button");
                new r.a(e).submit({
                    success: function () {
                        e.attr("data-to", null), e.attr("data-method", null), e.attr("data-csrf", null), e.attr("data-confirm", null), e.attr("href", "#"), e.attr("title", "Reports have been handled"), e.addClass("debate-show__debate-comment__handle-reports-button--inactive"), n.remove()
                    },
                    error: function () {
                        location.reload()
                    }
                })
            }), o(".debate-show").on("click", ".debate-show__debate-comment__handle-reports-button--inactive", function (t) {
                t.preventDefault()
            })
        })
    }).call(this, n(0))
}, function (t, e, n) {
    "use strict";
    (function (o) {
        var r = n(7);
        o(function () {
            var t = {
                $debateShow: o(".debate-show")
            };
            if (0 === t.$debateShow.length) return null;
            t.$mainHeader = o(".main-header");
            var e = Object(r.b)("comment_number");
            if ("" !== e) {
                var n = t.$debateShow.find(".debate-show__debate-comment[data-number = '" + e + "']");
                setTimeout(function () {
                    o("html, body").animate({
                        scrollTop: n.offset().top - t.$mainHeader.height()
                    }, 1e3)
                }, 300)
            }
        })
    }).call(this, n(0))
}, function (t, e, o) {
    "use strict";
    (function (e) {
        var n = o(2);
        e(function () {
            e(".debate-show").on("click", ".debate-show__debate-vote__delete-button", function (t) {
                if (t.preventDefault(), !window.confirm("Are you sure?")) return !1;
                new n.a(e(this)).submit()
            })
        })
    }).call(this, o(0))
}, function (t, e, r) {
    "use strict";
    (function (n) {
        var o = r(2);
        n(function () {
            n(".debate-show").on("click", ".debate-show__debate-vote__report-button", function (t) {
                t.preventDefault();
                var e = n(this);
                new o.a(e).submit({
                    success: function (t) {
                        e.attr("data-to", t.path), e.attr("data-method", t.method), "delete" === t.type ? (e.addClass("debate-show__debate-vote__report-button--highlighted"), e.attr("title", "Cancel the vote report")) : (e.removeClass("debate-show__debate-vote__report-button--highlighted"), e.attr("title", "Report the vote"))
                    },
                    error: function () {
                        location.reload()
                    }
                })
            })
        })
    }).call(this, r(0))
}, function (t, e, n) {
    "use strict";
    (function (o) {
        var r = n(2);
        o(function () {
            o(".debate-show").on("click", ".debate-show__debate-vote__handle-reports-button:not(.debate-show__debate-vote__handle-reports-button--inactive)", function (t) {
                t.preventDefault();
                var e = o(this),
                    n = e.siblings(".debate-show__debate-vote__report-button");
                new r.a(e).submit({
                    success: function () {
                        e.attr("data-to", null), e.attr("data-method", null), e.attr("data-csrf", null), e.attr("data-confirm", null), e.attr("href", "#"), e.attr("title", "Reports have been handled"), e.addClass("debate-show__debate-vote__handle-reports-button--inactive"), n.remove()
                    },
                    error: function () {
                        location.reload()
                    }
                })
            }), o(".debate-show").on("click", ".debate-show__debate-vote__handle-reports-button--inactive", function (t) {
                t.preventDefault()
            })
        })
    }).call(this, n(0))
}, function (t, e, n) {
    "use strict";
    (function (o) {
        var r = n(7);
        o(function () {
            var t = {
                $debateShow: o(".debate-show")
            };
            if (0 === t.$debateShow.length) return null;
            t.$mainHeader = o(".main-header");
            var e = Object(r.b)("vote_number");
            if ("" !== e) {
                var n = t.$debateShow.find(".debate-show__debate-vote[data-number = '" + e + "']");
                setTimeout(function () {
                    o("html, body").animate({
                        scrollTop: n.offset().top - t.$mainHeader.height()
                    }, 1e3)
                }, 300)
            }
        })
    }).call(this, n(0))
}, function (t, e, r) {
    "use strict";
    (function (n) {
        var o = r(2);
        n(function () {
            n(".debate-show").on("click", ".debate-show__debate-comment__report-button", function (t) {
                t.preventDefault();
                var e = n(this);
                new o.a(e).submit({
                    success: function (t) {
                        e.attr("data-to", t.path), e.attr("data-method", t.method), "delete" === t.type ? (e.addClass("debate-show__debate-comment__report-button--highlighted"), e.attr("title", "Cancel the comment report")) : (e.removeClass("debate-show__debate-comment__report-button--highlighted"), e.attr("title", "Report the comment"))
                    },
                    error: function () {
                        location.reload()
                    }
                })
            })
        })
    }).call(this, r(0))
}, function (t, e, o) {
    "use strict";
    (function (e) {
        var n = o(2);
        e(function () {
            e(".debate-show").on("click", ".debate-show__debate-comment__delete-button", function (t) {
                if (t.preventDefault(), !window.confirm("Are you sure?")) return !1;
                new n.a(e(this)).submit()
            })
        })
    }).call(this, o(0))
}, function (t, e, n) {
    "use strict";
    (function (e) {
        var o = n(2);
        e(function () {
            e(".debate-show").on("click", ".debate-show__marking-button--favorite[href='#']", function (t) {
                t.preventDefault();
                var n = e(this);
                new o.a(n).submit({
                    success: function (t) {
                        n.attr("data-to", t.path), n.attr("data-method", t.method);
                        var e = n.find("i");
                        "delete" === t.type ? (n.attr("title", "Remove the debate from the favorites"), e.attr("class", "fa fa-star")) : (n.attr("title", "Add the debate to the favorites"), e.attr("class", "far fa-star"))
                    },
                    error: function () {
                        location.reload()
                    }
                })
            })
        })
    }).call(this, n(0))
}, function (t, e, n) {
    "use strict";
    (function (e) {
        var o = n(2);
        e(function () {
            e(".debate-show").on("click", ".debate-show__marking-button--report[href='#']", function (t) {
                t.preventDefault();
                var n = e(this);
                new o.a(n).submit({
                    success: function (t) {
                        n.attr("data-to", t.path), n.attr("data-method", t.method);
                        var e = n.find("i");
                        "delete" === t.type ? (n.attr("title", "Cancel debate report"), e.attr("class", "fa fa-flag")) : (n.attr("title", "Report debate"), e.attr("class", "far fa-flag"))
                    },
                    error: function () {
                        location.reload()
                    }
                })
            })
        })
    }).call(this, n(0))
}, function (t, e, n) {
    "use strict";
    (function (o) {
        var r = n(2);
        o(function () {
            o(".debate-show").on("click", ".debate-show__marking-button--handle-reports:not(.debate-show__marking-button--handle-reports--inactive)", function (t) {
                t.preventDefault();
                var e = o(this),
                    n = e.siblings(".debate-show__marking-button--report");
                new r.a(e).submit({
                    success: function () {
                        e.attr("data-to", null), e.attr("data-method", null), e.attr("data-csrf", null), e.attr("data-confirm", null), e.attr("href", "#"), e.attr("title", "Reports have been handled"), e.find("i").attr("class", "fa fa-calendar-check"), e.addClass("debate-show__marking-button--handle-reports--inactive"), n.remove()
                    },
                    error: function () {
                        location.reload()
                    }
                })
            }), o(".debate-show").on("click", ".debate-show__marking-button--handle-reports--inactive", function (t) {
                t.preventDefault()
            })
        })
    }).call(this, n(0))
}, function (t, e, o) {
    "use strict";
    (function (e) {
        var n = o(2);
        e(function () {
            e(".debate-show").on("click", ".debate-show__marking-button--delete", function (t) {
                if (t.preventDefault(), !window.confirm("Are you sure?")) return !1;
                new n.a(e(this)).submit()
            })
        })
    }).call(this, o(0))
}, function (t, e, a) {
    "use strict";
    (function (n) {
        var i = a(1);

        function o(t) {
            return t.$richEditorIframe[0].contentWindow.editor
        }

        function r(t) {
            var e = parseInt(t.$charactersCounter.attr("data-max-chars"), 10) - o(t).getHTML().replace(/<\/?[^>]+(>|$)/g, "").replace(/\r?\n|\r/g, "").replace(" ", "").length;
            e <= 0 ? t.$charactersCounter.addClass("debate-argument-new__characters-counter--warning") : t.$charactersCounter.removeClass("debate-argument-new__characters-counter--warning"), t.$charactersCounterValue.text(e)
        }
        n(".debate-argument-new__form .rich-editor iframe").on("load", function () {
            var e = {
                $richEditorIframe: n(this)
            };
            n(function () {
                e.$form = n(".debate-argument-new__form"), e.$textInput = e.$form.find(".debate-argument-new__text-input"), e.$charactersCounter = n(".debate-argument-new__characters-counter"), e.$charactersCounterValue = e.$charactersCounter.find("span"), e.$richEditor = n(".rich-editor"), e.$richEditorLabel = e.$richEditor.closest(".debate-argument-new__form-row").find(".debate-argument-new__form-label"), e.$richEditorInput = e.$richEditor.find(".rich-editor__input");
                var t = n("#debate-argument-new__content-script")[0];
                o(e).setHTML(t.innerHTML), t.outerHTML = "", r(e), o(e).addEventListener("input", function () {
                    r(e)
                }), e.$richEditorLabel.click(function () {
                    o(e).focus()
                }), e.$form.submit(function (t) {
                    var r;
                    r = e, t.preventDefault(), r.$textInput.val(o(r).getHTML()), window.onbeforeunload = function () { }, new i.a(r.$form).submit({
                        error: function (t) {
                            if (400 === t.status) {
                                var e = JSON.parse(t.responseText).errors;
                                (o = r).$form.find(".debate-argument-new__form-input-error").remove(), o.$form.find(".rich-editor__input--without-radius").removeClass("rich-editor__input--without-radius"), Object(i.b)(e, (n = r, function (t, e) {
                                    n.$richEditorInput.after("<div class='debate-argument-new__form-input-error'>" + e + "</div>"), n.$richEditorInput.addClass("rich-editor__input--without-radius")
                                }))
                            } else alert("Something went wrong...");
                            var n, o
                        }
                    })
                }), window.onbeforeunload = function () {
                    return ""
                }
            })
        })
    }).call(this, a(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        var o = n(2);
        t(function () {
            var n = {
                $publishButton: t(".debate-argument-preview__action-button--publish")
            };
            if (0 === n.$publishButton.length) return null;
            n.$publishButton.click(function (t) {
                var e;
                e = n, t.preventDefault(), new o.a(e.$publishButton).submit({
                    error: function () {
                        alert("Something went wrong...")
                    }
                })
            })
        })
    }).call(this, n(0))
}, function (t, e, n) {
    (function (o) {
        o(function () {
            var n = o(".main-header").height();
            o("body").on("click", ".help-center-show__question-link", function (t) {
                t.preventDefault();
                var e = o(this),
                    n = e.find(".help-center-show__question-icon");
                e.siblings(".help-center-show__answer").toggleClass("help-center-show__answer--open"), n.toggleClass("help-center-show__question-icon--open")
            }), o("body").on("click", ".help-center-show__category", function (t) {
                t.preventDefault();
                var e = o(o(this).attr("data-section"));
                o("html, body").animate({
                    scrollTop: e.offset().top - n - 20
                }, 500)
            })
        })
    }).call(this, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        var i = n(1);
        t(function () {
            var e = {
                $form: t(".feedback-new__form")
            };
            if (0 === e.$form.length) return null;
            e.$form.submit(function (t) {
                var r;
                r = e, t.preventDefault(), new i.a(r.$form).submit({
                    error: function (t) {
                        if (400 === t.status) {
                            var e = JSON.parse(t.responseText).errors;
                            (n = r).$form.find(".feedback-new__form-input-error").remove(), n.$form.find(".feedback-new__form-input--has-error").removeClass("feedback-new__form-input--has-error"), Object(i.b)(e, (o = r, function (t, e) {
                                var n;
                                (n = o.$form.find(".feedback-new__form-input[name='feedback[" + t + "]']")).addClass("feedback-new__form-input--has-error"), n.after("<div class='feedback-new__form-input-error'>" + e + "</div>")
                            })), grecaptcha.reset()
                        } else alert("Something went wrong...");
                        var o, n
                    }
                })
            })
        })
    }).call(this, n(0))
}, function (t, e, n) {
    "use strict";
    (function (i) {
        var t = n(19),
            a = n.n(t);

        function e(t) {
            var e, n, o = i("meta[name='csrf-token']").attr("content"),
                r = {
                    method: "post",
                    url: "/api/time_settings",
                    data: {
                        settings: (e = t, n = e.map(function (t) {
                            return t.value
                        }), a.a.x64hash128(n.join(""), 31)),
                        _csrf_token: o
                    },
                    dataType: "json"
                };
            i.ajax(r)
        }
        i(function () {
            if (0 === i(".main-header__profile").length) return null;
            window.requestIdleCallback ? requestIdleCallback(function () {
                a.a.get(function (t) {
                    e(t)
                })
            }) : setTimeout(function () {
                a.a.get(function (t) {
                    e(t)
                })
            }, 5e3)
        })
    }).call(this, n(0))
}, , function (t, e, o) {
    "use strict";
    (function (e) {
        o(124);
        var t = o(17),
            r = o.n(t);
        e(function () {
            var r = {
                $iframe: e(".rich-editor__input > iframe")
            };
            if (0 === r.$iframe.length) return null;
            r.$richEditor = r.$iframe.closest(".rich-editor"), r.$urlInput = r.$richEditor.find(".rich-editor__anchor-dropdown-input"), r.$anchorDropdownButton = r.$richEditor.find(".rich-editor__anchor-dropdown-button"), r.$anchorDropdown = r.$richEditor.find(".rich-editor__anchor-dropdown");
            var i = function () {
                return r.$iframe[0].contentWindow.editor
            };
            r.$anchorDropdownButton.click(function (t) {
                var e, n, o = i();
                o && (e = o, n = r, t.preventDefault(), e.makeLink(n.$urlInput.val()), a(n.$anchorDropdown), n.$urlInput.val(""))
            }), r.$richEditor.on("click", ".rich-editor__toolbar-link", function () {
                var t = i();
                t && function (t, e, n) {
                    var o = n.attr("data-action"),
                        r = {
                            testBold: u(t, "bold", o, "B", />B\b/),
                            testItalic: u(t, "italic", o, "I", />I\b/),
                            testUnderline: u(t, "underline", o, "U", />U\b/),
                            testQuote: u(t, "increaseQuoteLevel", o, "blockquote", />blockquote\b/),
                            testUnorderedList: u(t, "makeUnorderedList", o, "UL", />UL\b/),
                            testOrderedList: u(t, "makeOrderedList", o, "OL", />OL\b/),
                            testLink: u(t, "makeLink", o, "A", />A\b/)
                        };
                    switch (o) {
                        case "bold":
                            r.testBold ? t.removeBold() : s(t, o);
                            break;
                        case "italic":
                            r.testItalic ? t.removeItalic() : s(t, o);
                            break;
                        case "underline":
                            r.testUnderline ? t.removeUnderline() : s(t, o);
                            break;
                        case "increaseQuoteLevel":
                            r.testQuote ? t.decreaseQuoteLevel() : s(t, o);
                            break;
                        case "makeUnorderedList":
                            r.testUnorderedList ? t.removeList() : s(t, o);
                            break;
                        case "makeOrderedList":
                            r.testOrderedList ? t.removeList() : s(t, o);
                            break;
                        case "makeLink":
                            r.testLink ? (t.removeLink(), t.focus()) : (a(e.$anchorDropdown), e.$urlInput.focus());
                            break;
                        case "clear":
                            t.setHTML("<div><br/></div>"), t.focus();
                            break;
                        default:
                            s(t, o)
                    }
                }(t, r, e(this))
            })
        });
        var n = e(".rich-editor__input > iframe");

        function a(t) {
            t.toggleClass("rich-editor__anchor-dropdown--active")
        }

        function s(t, e) {
            t[e](), t.focus()
        }

        function u(t, e, n, o, r) {
            var i = t.getPath(),
                a = r.test(i) || t.hasFormat(o);
            return !(e != n || !a)
        }
        0 !== n.length && n[0].addEventListener("load", function () {
            this.contentWindow.editor.addEventListener("willPaste", function (t) {
                var e, n, o;
                e = t, (n = document.createElement("div")).appendChild(e.fragment), n.innerHTML = r.a.sanitize(n.innerHTML, {
                    FORBID_ATTR: ["style"]
                }), (o = document.createDocumentFragment()).appendChild(n), e.fragment = o
            })
        })
    }).call(this, o(0))
}, function (t, e, n) {
    "use strict"
}, , , , , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    n.r(e);
    n(39), n(40), n(45);
    var o = n(17),
        r = n.n(o),
        i = (n(25), n(46), n(23), n(30), n(24), n(48), n(31), n(51), n(53), n(32)),
        a = n.n(i);
    n(55), n(56), n(57), n(58), n(59), n(60), n(61), n(62), n(63), n(64), n(65), n(66), n(67), n(68), n(69), n(70), n(71), n(72), n(73), n(74), n(75), n(76), n(77), n(78), n(79), n(80), n(81), n(82), n(83), n(84), n(85), n(86), n(87), n(88), n(89), n(90), n(91), n(92), n(94), n(95), n(96), n(97), n(98), n(99), n(100), n(101), n(102), n(103), n(104), n(105), n(106), n(107), n(108), n(109), n(110), n(111), n(112), n(113), n(114), n(115), n(116), n(117), n(118), n(119), n(120), n(121);
    window.profilePubSub = new a.a;
    n(27), n(123);
    window.DOMPurify = r.a
}]);
//# sourceMappingURL=./app.js-442fdc564f2ce9e933affdc308a2ee41.map