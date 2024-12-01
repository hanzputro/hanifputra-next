import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Portfolio")
    .items([
      S.listItem()
        .id("seo")
        .schemaType("SEO")
        .title("SEO")
        .child(S.editor().id("seo").schemaType("SEO").documentId("seo")),
      S.listItem()
        .id("collection")
        .title("Collection")
        .child(
          S.documentTypeList("collection")
            .title("Skill")
            .filter(`linkType == $linkType`)
            .params({ linkType: "skill" })
        ),
      // S.list()
      //   .title("Collections")
      //   .items([
      //     S.documentTypeListItem("collection")
      //       .title("Skills")
      //       .child(
      //         S.editor().id("home").schemaType("home").documentId("home")
      //       ),

      // S.documentTypeListItem("collection")
      // .title("Projects")
      // .child(
      //   S.document().schemaType("collection").documentId("project")
      // ),
      // S.documentTypeListItem("collection")
      // .title("Skills")
      // .child(
      //   S.document().schemaType("collection").documentId("skill")
      // ),
      // S.documentTypeListItem("collection")
      //   .id("project")
      //   .title("Projects"),
      // S.documentTypeListItem("collection")
      //   .id("socialMedia")
      //   .title("Social Media")

      // S.listItem().title("Skill").child(
      // S.document().schemaType("collection").documentId("collection")
      // S.documentTypeList()
      // S.documentWithInitialValueTemplate("collection", {
      //   category: "skill",
      // })
      // S.list()
      //   .title("Skills")
      //   .id("skill")
      //   .items([
      //     S.documentListItem().id("skill").schemaType("collection"),
      //   ])
      // ),
      // S.listItem()
      //   .title("Collection")
      //   .child(
      //     S.document().schemaType("collection").documentId("skill")
      //   ),
      // ])
      // ),
      S.listItem()
        .title("Homepage")
        .child(
          S.list()
            .title("Sections")
            .items([
              S.listItem()
                .id("homeSection")
                .schemaType("home")
                .title("Home")
                .child(
                  S.editor().id("home").schemaType("home").documentId("home")
                ),
              S.listItem()
                .id("skillSection")
                .schemaType("skill")
                .title("Skill")
                .child(
                  S.editor().id("skill").schemaType("skill").documentId("skill")
                ),
              S.listItem()
                .id("projectSection")
                .schemaType("project")
                .title("Project")
                .child(
                  S.editor()
                    .id("project")
                    .schemaType("project")
                    .documentId("project")
                ),
              S.listItem()
                .id("contact")
                .schemaType("contact")
                .title("Contact")
                .child(
                  S.editor()
                    .id("contact")
                    .schemaType("contact")
                    .documentId("contact")
                ),
            ])
        ),
      S.divider(),
      // S.documentTypeListItem("post").title("Posts"),
      // S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("author").title("Authors"),
    ]);
